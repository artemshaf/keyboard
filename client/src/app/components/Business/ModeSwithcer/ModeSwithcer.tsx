import {
  Button,
  colors,
  styled,
  Typography,
  useColorScheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import { LightMode, DarkMode } from "@mui/icons-material";

import { IModeSwithcerInterface } from "./ModeSwithcer.interface";

const ModeSwithcerButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

export const ModeSwithcer = ({ ...props }: IModeSwithcerInterface) => {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);

  const onClick = () => {
    //! for toggle mode theme
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    //! for server-side rendering
    return null;
  }

  const ThemeIcon: React.FC = () => (
    <>{mode === "light" ? <LightMode /> : <DarkMode />}</>
  );

  return (
    <ModeSwithcerButton onClick={onClick} {...props}>
      <ThemeIcon />
      <Typography>&nbsp;{mode?.toLowerCase()}</Typography>
    </ModeSwithcerButton>
  );
};

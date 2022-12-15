import { IHeaderInterface } from "./Header.interface";
import {
  AppBar,
  useScrollTrigger,
  Slide,
  List,
  ListItem,
  Box,
  Typography,
} from "@mui/material/";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import { useState } from "react";
import { CustomGrid } from "./components";
import { navigation } from "../../../data";
import { Link } from "react-router-dom";

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export const Header = ({ className, ...props }: IHeaderInterface) => {
  const [auth, setAuth] = useState<boolean>(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  return (
    <HideOnScroll {...props}>
      <AppBar sx={{ position: "fixed", height: 100 }}>
        <Box>
          <KeyboardIcon color="error" fontSize="large" width={50} />
          <Typography>Faster Key</Typography>
        </Box>
        <List sx={{ display: "flex" }}>
          {navigation.map((item, index) => (
            <ListItem key={`${item.link + index}`}>
              <Link to={item.link}>{item.text}</Link>
            </ListItem>
          ))}
        </List>
      </AppBar>
    </HideOnScroll>
  );
};

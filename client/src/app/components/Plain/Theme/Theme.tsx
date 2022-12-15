import { IThemeInterface } from "./Theme.interface";
import { Button } from "@mui/material";

export const Theme = ({ className, ...props }: IThemeInterface) => {
  return (
    <div {...props}>
      <Button>123</Button>
    </div>
  );
};

import { Container as MUIContainer } from "@mui/material";
import { IContainerInterface } from "./Container.interface";

export const Container = ({ children, ...props }: IContainerInterface) => {
  return <MUIContainer {...props}>{children}</MUIContainer>;
};

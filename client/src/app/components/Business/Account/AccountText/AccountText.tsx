import { Box } from "@mui/material";
import { IAccountTextInterface } from "./AccountText.interface";

export const AccountText = ({ ...props }: IAccountTextInterface) => {
  return <Box {...props}>AccountText Component</Box>;
};

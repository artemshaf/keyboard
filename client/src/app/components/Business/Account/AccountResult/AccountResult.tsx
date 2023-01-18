import { Box } from "@mui/material";
import { IAccountResultInterface } from "./AccountResult.interface";

export const AccountResult = ({ ...props }: IAccountResultInterface) => {
  return <Box {...props}>AccountResult Component</Box>;
};

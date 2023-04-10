import { Box } from "@mui/material";
import { IAccountEditInterface } from "./AccountEdit.interface";

export const AccountEdit = ({ ...props }: IAccountEditInterface) => {
  return <Box {...props}>AccountEdit Component</Box>;
};

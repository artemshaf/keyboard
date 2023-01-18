import { Box, Typography } from "@mui/material";
import { IAccountInfoInterface } from "./AccountInfo.interface";

export const AccountInfo = ({ ...props }: IAccountInfoInterface) => {
  return (
    <Box {...props}>
      <Typography>Имя</Typography>
      <Typography>Фамилия</Typography>
    </Box>
  );
};

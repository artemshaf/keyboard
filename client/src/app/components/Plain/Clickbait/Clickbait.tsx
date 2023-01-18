import { Box, Button, Typography } from "@mui/material";
import { IClickbaitInterface } from "./Clickbait.interface";

export const Clickbait = ({ ...props }: IClickbaitInterface) => {
  return (
    <Box {...props}>
      <Typography variant="h3"></Typography>
      <Typography></Typography>
      <Button></Button>
    </Box>
  );
};

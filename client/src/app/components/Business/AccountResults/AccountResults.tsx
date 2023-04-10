import { Box, MenuItem, Select } from "@mui/material";
import { IAccountResultsInterface } from "./AccountResults.interface";

export const AccountResults = ({ ...props }: IAccountResultsInterface) => {
  return (
    <Box {...props}>
      <Box>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Выберите язык"
        >
          <MenuItem value={10}>Английский</MenuItem>
          <MenuItem value={20}>Русский</MenuItem>
        </Select>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Выберите тип теста"
        >
          <MenuItem value={10}>По словам</MenuItem>
          <MenuItem value={20}>По буквам</MenuItem>
        </Select>
      </Box>
      <Box></Box>
    </Box>
  );
};

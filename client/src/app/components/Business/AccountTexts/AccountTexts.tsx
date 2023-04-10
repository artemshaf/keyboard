import {
  Box,
  Button,
  colors,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
} from "@mui/material";
import { useState } from "react";
import { IAccountTextsInterface } from "./AccountTexts.interface";
import { AccountTextsAdd } from "./AccountTextsAdd";
import { AccountTextsSee } from "./AccountTextsSee";

type Mode = "see" | "add";

type TextVarians = {
  text: string;
  mode: Mode;
};

const TextsVariants: TextVarians[] = [
  {
    text: "Просмотреть ваши текста",
    mode: "see",
  },
  {
    text: "Добавить текст",
    mode: "add",
  },
];

export const AccountTexts = ({ ...props }: IAccountTextsInterface) => {
  const [mode, setMode] = useState<Mode>("add");

  return (
    <Box sx={{ bgcolor: "red", width: "100%", padding: "20px" }} {...props}>
      <FormControl fullWidth>
        <InputLabel
          sx={{ color: colors.grey[800] }}
          id="demo-simple-select-label"
        >
          Age
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
          defaultValue={mode}
        >
          {TextsVariants.map((item) => (
            <MenuItem value={item.mode} onClick={() => setMode(item.mode)}>
              {item.text}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {mode === "see" ? <AccountTextsSee /> : <AccountTextsAdd />}
    </Box>
  );
};

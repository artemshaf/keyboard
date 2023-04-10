import { Box, List, ListItem, MenuItem, TextareaAutosize } from "@mui/material";
import { useLanguage } from "@hooks";
import { InputLabelStyled, SelectStyled } from "../AccountTextsAdd";
import { IAccountTextsSeeInterface } from "./AccountTextsSee.interface";

export const AccountTextsSee = ({ ...props }: IAccountTextsSeeInterface) => {
  const results = [1, 1, 1, 1, 1, 1];
  const { languages, selectedLanguage } = useLanguage();

  return (
    <Box {...props}>
      <InputLabelStyled id="demo-simple-select-label">
        Language
      </InputLabelStyled>
      <SelectStyled
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Language"
      >
        {languages ? (
          Object.keys(languages).map((lang) => (
            <MenuItem key={lang} value={languages[lang].nativeName}>
              {languages[lang].nativeName}
            </MenuItem>
          ))
        ) : (
          <></>
        )}
      </SelectStyled>
      <List>
        {results.map((result) => (
          <ListItem>
            <TextareaAutosize defaultValue={result} disabled />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

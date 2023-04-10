import {
  Box,
  Button,
  colors,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  styled,
  TextareaAutosize,
} from "@mui/material";
import { useTransition } from "react";
import { useTranslation } from "react-i18next";
import { IAccountTextsAddInterface } from "./AccountTextsAdd.interface";
import { useLanguage } from "@hooks";
import { useForm, Controller } from "react-hook-form";
import { ICreateTextDto } from "@interfaces";

export const InputLabelStyled = styled(InputLabel)(() => ({
  color: colors.grey[800],
}));

export const SelectStyled = styled(Select)`
  color: ${colors.common.white};
  background-color: ${colors.grey[500]};
`;

const TextareaAutosizeStyled = styled(TextareaAutosize)`
  box-sizing: border-box;
  max-width: 600px;
  max-height: 140px;
  overflow-y: scroll;
  overflow: scroll;
  resize: none;
  color: ${colors.grey[800]};
  padding: 10px;
  font-size: 16px;
`;

export const AccountTextsAdd = ({ ...props }: IAccountTextsAddInterface) => {
  const { t, i18n } = useTranslation();
  const { languages, selectedLanguage } = useLanguage();
  const {
    register,
    handleSubmit,
    control,
    watch,
    getValues,
    formState: { errors },
  } = useForm<ICreateTextDto>();

  const onSubmit = (data: any) => console.log(data);

  return (
    <Box {...props}>
      <FormControl fullWidth onSubmit={onSubmit}>
        <Controller
          control={control}
          name="languageId"
          defaultValue={1}
          render={({ field }) => (
            <>
              <InputLabelStyled id="demo-simple-select-label">
                Language
              </InputLabelStyled>
              <SelectStyled
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Language"
                {...field}
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
            </>
          )}
        />
        <Controller
          control={control}
          name="text"
          defaultValue=""
          render={({ field }) => (
            <TextareaAutosizeStyled {...field} maxLength={2000} />
          )}
        />
        <Button
          type="submit"
          onClick={() => {
            console.log(errors);
            console.log(getValues());
          }}
        >
          Отправить
        </Button>
      </FormControl>
    </Box>
  );
};

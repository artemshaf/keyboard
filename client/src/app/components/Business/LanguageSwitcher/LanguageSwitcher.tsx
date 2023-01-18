import {
  Box,
  Select,
  MenuItem,
  InputLabel,
  styled,
  Typography,
  colors,
} from "@mui/material";
import { ILanguageSwitcherInterface } from "./LanguageSwitcher.interface";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@hooks";
import { ArrowDropDownCircleOutlined } from "@mui/icons-material";

const BoxStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  columnGap: 5,
  next: {
    svg: {
      fill: colors.common.black,
    },
  },
}));

const SelectStyled = styled(Select)(({ theme }) => ({}));

export const LanguageSwitcher = ({ ...props }: ILanguageSwitcherInterface) => {
  const { languages, selectedLanguage } = useLanguage();

  const { t, i18n } = useTranslation();

  return (
    <BoxStyled {...props}>
      <Typography id="languageSwitcherLabelId">{t("language")}:</Typography>
      <SelectStyled
        value={selectedLanguage}
        defaultValue={"default"}
        labelId="languageSwitcherLabelId"
        id="languageSwitcherId"
        variant="outlined"
      >
        {languages ? (
          Object.keys(languages).map((lang) => (
            <MenuItem
              key={lang}
              onClick={() => i18n.changeLanguage(lang)}
              value={languages[lang].nativeName}
            >
              {languages[lang].nativeName}
            </MenuItem>
          ))
        ) : (
          <></>
        )}
      </SelectStyled>
    </BoxStyled>
  );
};

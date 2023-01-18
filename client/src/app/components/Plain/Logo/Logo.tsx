import { Box, Link, styled, Typography } from "@mui/material";
import { ILogoInterface } from "./Logo.interface";
import { useTranslation } from "react-i18next";
import { HOME_PAGE } from "@utils";
import { Keyboard } from "@mui/icons-material";

const BoxStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  columnGap: 5,
  color: theme.palette.text.primary,
}));

export const Logo = ({ ...props }: ILogoInterface) => {
  const { t } = useTranslation();

  return (
    <Link href={HOME_PAGE}>
      <BoxStyled {...props}>
        <Keyboard sx={{ fontSize: "64px" }} />
        <Typography>{t("logo.description")}</Typography>
      </BoxStyled>
    </Link>
  );
};

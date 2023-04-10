import {
  Toolbar,
  AppBar,
  List,
  Box,
  colors,
  Tooltip,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
} from "@mui/material";
import type {} from "@mui/material/themeCssVarsAugmentation";
import { styled } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

import { IHeaderInterface } from "./Header.interface";
import {
  ModeSwithcer,
  Container,
  LanguageSwitcher,
  Logo,
  AccountHeader,
} from "@components";
import { headerNavigation } from "@data";
import { Link } from "react-router-dom";

const ToolbarStyled = styled(Toolbar)(
  ({ theme }) => `
  background-color: ${theme.palette.background.paper};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 0;

  @media (max-width:${theme.breakpoints.values.md}px){
    
  };
`
);

const ListStyled = styled(List)(({ theme }) => ({
  color: theme.palette.text.primary,
  display: "flex",
  columnGap: "40px",
  alignItems: "center",
}));

const ContainerBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: "10px 0",
}));

export const Header = ({ className, ...props }: IHeaderInterface) => {
  const { t, i18n } = useTranslation();

  return (
    <ContainerBox as={"header"}>
      <Container maxWidth="xl">
        <AppBar position="sticky">
          <ToolbarStyled>
            <Logo />
            {headerNavigation.length > 0 ? (
              <ListStyled>
                {headerNavigation.map((item, index) => (
                  <Link
                    key={item.link + index}
                    to={item.link}
                    color={"inherit"}
                  >
                    {item.text ? item.text : t(`${item.i18Key}`, "Ooouupps")}
                  </Link>
                ))}
              </ListStyled>
            ) : (
              <></>
            )}
            <Box display="flex" gap={2}>
              <ModeSwithcer />
              <LanguageSwitcher />
            </Box>
            <AccountHeader />
          </ToolbarStyled>
        </AppBar>
      </Container>
    </ContainerBox>
  );
};

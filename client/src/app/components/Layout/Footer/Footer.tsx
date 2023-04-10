import { Box, List, ListItem, styled, Typography, colors } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useId } from "react";

import { Container } from "@components";
import { footerNavigation, socials } from "@data";
import { IFooterInterface } from "./Footer.interface";
import { Link } from "react-router-dom";

const FooterBox = styled(Box)(
  ({ theme }) => `
  background-color: ${theme.palette.background.default};
  color: ${colors.common.white};
  padding: 20px;
  border-top: 2px solid ${theme.palette.text.primary}
`
);

const NavigationList = styled(List)`
  display: flex;
  column-gap: 24px;
  color: ${colors.common.white};

  & > li {
    width: auto;
    margin: 0;
    padding: 0;
  }
`;

const SocialList = styled(List)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Footer = ({ ...props }: IFooterInterface) => {
  const { t } = useTranslation();

  return (
    <FooterBox as={"footer"} {...props}>
      <Container maxWidth="xl">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <NavigationList>
            {footerNavigation.map((link) => (
              <ListItem key={link.i18Key || link.text}>
                <Link to={link.link} color={"inherit"}>
                  {link.text ? link.text : t(`${link.i18Key}`)}
                </Link>
              </ListItem>
            ))}
          </NavigationList>
          <SocialList>
            {socials.map((link) => (
              <ListItem key={link.text || useId()}>
                <Link to={link.link}>{link.text ? link.text : link.icon}</Link>
              </ListItem>
            ))}
          </SocialList>
        </Box>
        <Box>
          <Typography></Typography>
          <Typography>
            {`© ${new Date().getFullYear()} Ratatype — Удобный и простой клавиатурный тренажер`}
          </Typography>
        </Box>
      </Container>
    </FooterBox>
  );
};

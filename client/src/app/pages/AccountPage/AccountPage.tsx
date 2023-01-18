import { Box, Button, colors, List, ListItem, styled } from "@mui/material";
import { IAccountPageInterface } from "./AccountPage.interface";
import { Suspense, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { accountVariants, TAccountVariants } from "@data";
import {
  AccountInfo,
  AccountResult,
  AccountText,
  Container,
  Loader,
} from "@components";
import { componentVariant } from "@interfaces";

const AccoutPageWrapperBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
}));

const AccoutPageBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.text.primary,
  borderRadius: "15px",
  ["& *"]: {
    color: colors.common.black,
  },
  display: "flex",
  flexDirection: "row",
  justifyContent: "start",
  alignItems: "center",
}));

const AccoutPageVariantsList = styled(Box)(({ theme }) => ({
  width: "200px",
  ["& > li"]: {
    color: colors.common.black,
    cursor: "pointer",
  },
}));

export const AccountPage = ({ ...props }: IAccountPageInterface) => {
  const variants = useRef(accountVariants);
  const [activeComponentVariant, setActiveComponentVariant] = useState(
    () => variants.current[0]
  );

  const { t } = useTranslation();

  const onChangeActiveComponent = (
    component: componentVariant<TAccountVariants>
  ) => {
    setActiveComponentVariant(component);
  };

  const getCorrectComponent = (
    component: componentVariant<TAccountVariants>
  ): JSX.Element => {
    if (component.variantState === "info") return <AccountInfo />;
    if (component.variantState === "result") return <AccountResult />;
    return <AccountText />;
  };

  return (
    <AccoutPageWrapperBox {...props}>
      <Container>
        <AccoutPageBox>
          <AccoutPageVariantsList>
            {variants.current.map((component) => (
              <ListItem
                onClick={() => {
                  onChangeActiveComponent(component);
                }}
              >
                {t(component.text)}
              </ListItem>
            ))}
          </AccoutPageVariantsList>
          <Suspense fallback={<Loader />}>
            {getCorrectComponent(activeComponentVariant)}
          </Suspense>
        </AccoutPageBox>
      </Container>
    </AccoutPageWrapperBox>
  );
};

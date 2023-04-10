import { Box } from "@mui/material";
import { IRegistrationInterface } from "./Registration.interface";

import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { LooksOutlined } from "@mui/icons-material";
import {
  storeActions,
  useActions,
  useAppSelector,
  selectAccountState,
  selectRegistrationStep,
} from "@store";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { FirstFormRegistration } from "./FirstForm/FirstForm";
import { SecondFormRegistration } from "./SecondForm/SecondForm";
import { HOME_PAGE } from "@utils";

export const Registration = ({ ...props }: IRegistrationInterface) => {
  const { isEntered } = useAppSelector(selectAccountState);
  const formStep = useAppSelector(selectRegistrationStep);
  const navigate = useNavigate();

  const getCorrectForm = () => {
    if (formStep === 1) {
      return <FirstFormRegistration />;
    } else if (formStep === 2) {
      return <SecondFormRegistration />;
    }
    return null;
  };

  useEffect(() => {
    if (isEntered) {
      navigate(HOME_PAGE);
    }
  }, [isEntered]);

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          bgcolor: "grey",
          color: "black",
          padding: 3,
          borderRadius: 3,
        }}
        {...props}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LooksOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        {getCorrectForm()}
      </Box>
    </Container>
  );
};

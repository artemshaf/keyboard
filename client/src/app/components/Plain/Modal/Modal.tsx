import {
  Button,
  Modal as ModalComponent,
  TextField,
  Box,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";
import { useAppDispatch } from "@store";
import { IModalInterface } from "./Modal.interface";
import { login } from "../../../store/account";

const ModalStyled = styled(ModalComponent)(({ theme }) => ({
  display: "flex",
  marginLeft: "auto",
  marginRight: "auto",
  flexDirection: "column",
  justifyContent: "center",
  maxWidth: "800px",
  height: "auto",
  borderRadius: "36px",
  backgroundColor: theme.palette.text.primary,
}));

const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "25px",
  paddingLeft: "20px",
  paddingRight: "20px",
  backgroundColor: theme.palette.text.default,
}));

export const Modal = ({ children, ...props }: IModalInterface) => {
  const [open, setOpen] = useState(true);
  const [isRegister, setIsRegister] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useAppDispatch();

  const testThunk = () => {
    // dispatch(login());
  };

  if (isRegister) {
    return (
      <ModalStyled
        open={open}
        onClose={() => {}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Wrapper>
          <Typography
            sx={{ mx: "auto", display: "block" }}
            variant="h4"
            onClick={() => {
              testThunk();
            }}
          >
            Регистрация
          </Typography>
          <TextField variant="filled" label="Почта"></TextField>
          <TextField
            variant="filled"
            label="Пароль"
            type="password"
          ></TextField>
          <Button onClick={() => setIsRegister(false)}>Войти?</Button>
        </Wrapper>
      </ModalStyled>
    );
  }

  return (
    <ModalStyled
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Wrapper>
        <Typography
          sx={{ mx: "auto", display: "block" }}
          variant="h4"
          onClick={() => {
            testThunk();
          }}
        >
          Войдите в учетную запись
        </Typography>
        <TextField variant="filled" label="Почта"></TextField>
        <TextField variant="filled" label="Пароль" type="password"></TextField>
        <Button onClick={() => setIsRegister(true)}>Зарегистрироваться?</Button>
      </Wrapper>
    </ModalStyled>
  );
};

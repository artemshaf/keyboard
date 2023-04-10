import { Box } from "@mui/material";
import { ILoginInterface } from "./Login.interface";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useForm } from "@hooks";
import { SubmitHandler, Controller } from "react-hook-form";
import { formResolver, IFormResolver } from "./resolver";
import { Link, useNavigate } from "react-router-dom";
import { HOME_PAGE, REGISTRATION_PAGE, TOKENS } from "@utils";
import {
  selectAccountState,
  storeActions,
  useActions,
  useAppSelector,
} from "@store";
import { ILoginResponseDto } from "@interfaces";
import { useLocalStorage } from "usehooks-ts";
import { useEffect } from "react";

export const Login = ({ ...props }: ILoginInterface) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormResolver>({
    resolver: formResolver,
  });
  const { isEntered } = useAppSelector(selectAccountState);
  const navigate = useNavigate();
  const actions = useActions(storeActions);

  const onSubmit: SubmitHandler<IFormResolver> = async (formData) => {
    actions.setLoginData({
      email: formData.email,
      password: formData.password,
    });
    await actions.login();
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
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginY: 10,
        }}
        {...props}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1 }}
        >
          <Controller
            control={control}
            name="email"
            defaultValue="shaf2@gmail.com"
            render={({ field: { value, ref, onChange } }) => (
              <TextField
                ref={ref}
                value={value}
                onChange={onChange}
                error={!!errors.email?.message}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            defaultValue="shaf"
            render={({ field: { value, ref, onChange } }) => (
              <TextField
                ref={ref}
                value={value}
                onChange={onChange}
                margin="normal"
                required
                error={!!errors.password?.message}
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            )}
          />
          <Controller
            control={control}
            name="agree"
            defaultValue={false}
            render={({ field: { value, onChange } }) => (
              <FormControlLabel
                control={
                  <Checkbox onChange={onChange} value={value} color="primary" />
                }
                label="Do you agree?"
              />
            )}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link to={REGISTRATION_PAGE}>
                <Typography variant="body2">
                  {"Don't have an account? Sign Up"}
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

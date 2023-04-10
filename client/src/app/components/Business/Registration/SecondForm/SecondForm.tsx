import { Box } from "@mui/material";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { useForm } from "@hooks";
import { SubmitHandler, Controller } from "react-hook-form";
import {
  storeActions,
  useActions,
  useAppSelector,
  selectAccountState,
} from "@store";
import { useLocalStorage } from "usehooks-ts";
import { HOME_PAGE, TOKENS } from "@utils";
import { IRegistrationResponseDto } from "@interfaces";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { formResolver, IRegisrationSecondFormData } from "./resolver";

export const SecondFormRegistration = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<IRegisrationSecondFormData>({
    resolver: formResolver,
  });
  const { account, isEntered } = useAppSelector(selectAccountState);
  const navigate = useNavigate();

  const actions = useActions(storeActions);

  const onSubmit: SubmitHandler<IRegisrationSecondFormData> = async (
    formData
  ) => {
    actions.setRegisrationSecondData({
      name: formData.name,
      password: formData.password,
      surname: formData.password,
    });
    await actions.registration().then((res) => {
      const payload = res.payload as IRegistrationResponseDto;

      useLocalStorage(TOKENS.ACCESS, payload.tokens.accessToken);
      useLocalStorage(TOKENS.REFRESH, payload.tokens.refreshToken);
    });
  };

  useEffect(() => {
    if (isEntered) {
      navigate(HOME_PAGE);
    }
  }, [isEntered]);

  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      sx={{ my: 3 }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Controller
            control={control}
            name="name"
            render={({ field: { value, onChange, ref } }) => (
              <TextField
                ref={ref}
                value={value}
                onChange={onChange}
                autoComplete="given-name"
                name="firstName"
                error={!!errors.name}
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            control={control}
            name="surname"
            render={({ field: { value, onChange, ref } }) => (
              <TextField
                ref={ref}
                value={value}
                onChange={onChange}
                fullWidth
                error={!!errors.surname}
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            control={control}
            name="password"
            render={({ field: { value, onChange, ref } }) => (
              <TextField
                required
                fullWidth
                ref={ref}
                value={value}
                error={!!errors.password}
                onChange={onChange}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            control={control}
            name="repeatPassword"
            render={({ field: { value, onChange, ref } }) => (
              <TextField
                required
                fullWidth
                ref={ref}
                value={value}
                error={!!errors.repeatPassword}
                onChange={onChange}
                label="Repeat password"
                type="password"
                id="repeat-password"
                autoComplete="repeat-new-password"
              />
            )}
          />
        </Grid>
      </Grid>
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Sign Up
      </Button>
      <Grid container justifyContent="flex-end">
        <Grid item>
          <Link href="#" variant="body2">
            Already have an account? Sign in
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

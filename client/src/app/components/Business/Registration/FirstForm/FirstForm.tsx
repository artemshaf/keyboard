import { Box, Typography } from "@mui/material";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { useForm } from "@hooks";
import { SubmitHandler } from "react-hook-form";
import {
  selectRegistrationState,
  storeActions,
  useActions,
  useAppSelector,
} from "@store";
import { IRegisrationFirstData } from "@interfaces";
import { formResolver } from "./resolver";
import { Controller } from "react-hook-form";

export const FirstFormRegistration = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<IRegisrationFirstData>({
    resolver: formResolver,
  });

  const { error } = useAppSelector(selectRegistrationState);

  const actions = useActions(storeActions);

  const onSubmit: SubmitHandler<IRegisrationFirstData> = async (formData) => {
    actions.setRegisrationFirstData({
      email: formData.email,
    });

    await actions.containUser();
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Controller
            name="email"
            control={control}
            render={({ field: { ref, value, onChange } }) => (
              <TextField
                ref={ref}
                value={value}
                error={!!errors.email?.message}
                onChange={onChange}
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            )}
          />
        </Grid>
      </Grid>
      {error && <Typography>{error}</Typography>}
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

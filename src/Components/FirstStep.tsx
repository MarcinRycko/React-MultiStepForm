import { Container, Box, TextField, MenuItem, Grid } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { ValidationRules } from '../utils/Validation';

const FirstStep: React.FC = () => {
  const { control } = useFormContext();
  const {
    nameValidationRules,
    surnameValidationRules,
    genderValidationRules,
    dateOfBirthdayValidationRules,
  } = ValidationRules();

  return (
    <>
      <Container
        component="main"
        maxWidth="sm"
        sx={{
          mt: 6,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box component="form" maxWidth="sm" width="100%">
          <Controller
            name="name"
            defaultValue=""
            control={control}
            rules={nameValidationRules}
            render={({ field, fieldState: { error } }) => (
              <TextField
                sx={{ mb: 1 }}
                required
                fullWidth
                label="Name"
                error={error ? true : false}
                helperText={error ? error.message : ' '}
                autoFocus
                {...field}
              />
            )}
          />
          <Controller
            name="surname"
            control={control}
            defaultValue=""
            rules={surnameValidationRules}
            render={({ field, fieldState: { error } }) => (
              <TextField
                sx={{ mb: 1 }}
                required
                fullWidth
                error={error ? true : false}
                helperText={error ? error.message : ' '}
                label="Surname"
                {...field}
              />
            )}
          />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Controller
                name="dateOfBirthday"
                defaultValue=""
                control={control}
                rules={dateOfBirthdayValidationRules}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    sx={{ mb: 1 }}
                    fullWidth
                    required
                    type="date"
                    label="Date of birthday"
                    error={error ? true : false}
                    helperText={error ? error.message : ' '}
                    InputLabelProps={{ shrink: true }}
                    {...field}
                  ></TextField>
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <Controller
                name="gender"
                defaultValue=""
                control={control}
                rules={genderValidationRules}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    sx={{ mb: 1 }}
                    fullWidth
                    required
                    label="Gender"
                    select
                    error={error ? true : false}
                    helperText={error ? error.message : ' '}
                    {...field}
                  >
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                  </TextField>
                )}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default FirstStep;

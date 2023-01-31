import {
  Container,
  Box,
  TextField,
  Grid,
  FormControlLabel,
  Checkbox,
  FormHelperText,
  FormControl,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { PostCodeInputMask } from './InputMask';
import { ValidationRules } from '../utils/Validation';

const ThirdStep = () => {
  const { control } = useFormContext();
  const {
    countryValidationRules,
    cityValidationRules,
    streetValidationRules,
    stateValidationRules,
    postCodeValidationRules,
    termsValidationRules,
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
            name="country"
            defaultValue=""
            control={control}
            rules={countryValidationRules}
            render={({ field, fieldState: { error } }) => (
              <TextField
                sx={{ mb: 1 }}
                required
                fullWidth
                label="Country"
                error={error ? true : false}
                helperText={error ? error.message : ' '}
                autoFocus
                {...field}
              />
            )}
          />

          <Controller
            name="city"
            defaultValue=""
            control={control}
            rules={cityValidationRules}
            render={({ field, fieldState: { error } }) => (
              <TextField
                sx={{ mb: 1 }}
                required
                fullWidth
                label="City"
                error={error ? true : false}
                helperText={error ? error.message : ' '}
                {...field}
              />
            )}
          />

          <Controller
            name="street"
            defaultValue=""
            control={control}
            rules={streetValidationRules}
            render={({ field, fieldState: { error } }) => (
              <TextField
                sx={{ mb: 1 }}
                required
                fullWidth
                label="Street"
                error={error ? true : false}
                helperText={error ? error.message : ' '}
                {...field}
              />
            )}
          />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Controller
                name="state"
                defaultValue=""
                control={control}
                rules={stateValidationRules}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    sx={{ mb: 1 }}
                    required
                    fullWidth
                    label="State"
                    error={error ? true : false}
                    helperText={error ? error.message : ' '}
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <Controller
                name="post-code"
                defaultValue=""
                control={control}
                rules={postCodeValidationRules}
                render={({ field, fieldState: { error } }) => (
                  <FormControl fullWidth sx={{ mb: 1 }}>
                    <InputLabel required error={error ? true : false}>
                      Post-Code
                    </InputLabel>
                    <OutlinedInput
                      required
                      fullWidth
                      label="Post-Code"
                      error={error ? true : false}
                      inputComponent={PostCodeInputMask as any}
                      {...field}
                    />
                    <FormHelperText error={error ? true : false}>
                      {error ? error.message : ' '}
                    </FormHelperText>
                  </FormControl>
                )}
              />
            </Grid>
          </Grid>
          <Controller
            name="terms-Agree"
            defaultValue=""
            control={control}
            rules={termsValidationRules}
            render={({ field, fieldState: { error } }) => (
              <FormControl>
                <FormControlLabel
                  control={
                    <>
                      <Checkbox
                        required
                        checked={Boolean(field.value)}
                        {...field}
                        sx={{ mb: 1 }}
                      />
                    </>
                  }
                  label="I agree to the terms and conditions as set out by the user agreement."
                />
                <FormHelperText error={error ? true : false}>
                  {error ? error.message : ' '}
                </FormHelperText>
              </FormControl>
            )}
          />
        </Box>
      </Container>
    </>
  );
};

export default ThirdStep;

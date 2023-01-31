import React, { useState } from 'react';
import { Container, Box, TextField, InputAdornment } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { ValidationRules } from '../utils/Validation';

const SecondStep: React.FC = () => {
  const { control } = useFormContext();
  const {
    emailValidationRules,
    passwordValidationRules,
    confirmPasswordValidationRules,
  } = ValidationRules();

  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [isConfirmPasswordHidden, setIsConfirmPasswordHidden] = useState(true);
  const handleShowPassword = () => {
    setIsPasswordHidden((prev) => !prev);
  };
  const handleShowConfirmPassword = () => {
    setIsConfirmPasswordHidden((prev) => !prev);
  };

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
            name="email"
            defaultValue=""
            control={control}
            rules={emailValidationRules}
            render={({ field, fieldState: { error } }) => (
              <TextField
                sx={{ mb: 1 }}
                type="email"
                required
                fullWidth
                label="Email"
                error={error ? true : false}
                helperText={error ? error.message : ' '}
                autoFocus
                {...field}
              />
            )}
          />
          <Controller
            name="password"
            defaultValue=""
            control={control}
            rules={passwordValidationRules}
            render={({ field, fieldState: { error } }) => (
              <TextField
                sx={{ mb: 1 }}
                required
                fullWidth
                type={isPasswordHidden ? 'password' : 'text'}
                label="Passowrd"
                error={error ? true : false}
                helperText={error ? error.message : ' '}
                {...field}
                InputProps={{
                  endAdornment: (
                    <InputAdornment
                      position="end"
                      onClick={handleShowPassword}
                      sx={{ cursor: 'pointer' }}
                    >
                      {isPasswordHidden ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
          <Controller
            name="confirmPassword"
            defaultValue=""
            control={control}
            rules={confirmPasswordValidationRules}
            render={({ field, fieldState: { error } }) => (
              <TextField
                sx={{ mb: 1 }}
                required
                fullWidth
                type={isConfirmPasswordHidden ? 'password' : 'text'}
                label="Confirm Password"
                error={error ? true : false}
                helperText={error ? error.message : ' '}
                {...field}
                InputProps={{
                  endAdornment: (
                    <InputAdornment
                      position="end"
                      onClick={handleShowConfirmPassword}
                      sx={{ cursor: 'pointer' }}
                    >
                      {isConfirmPasswordHidden ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
        </Box>
      </Container>
    </>
  );
};

export default SecondStep;

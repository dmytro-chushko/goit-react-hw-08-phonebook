import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations, authSlice } from 'redux/auth';
import {
  handleClickShowPass,
  handleMouseDownPassword,
  fetchErrorHendler,
} from 'helpers';
import { useForm } from 'react-hook-form';

import {
  Box,
  TextField,
  IconButton,
  InputAdornment,
  Typography,
  FormControl,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Visibility, VisibilityOff, HowToReg } from '@mui/icons-material';

const { useRegisterUserMutation } = authOperations;
const { setToken } = authSlice;

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const [showConfPass, setShowConfPass] = useState(false);
  const [signUp, { isLoading }] = useRegisterUserMutation();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confPass: '',
    },
  });
  const watchPass = watch('password', '');

  const onSubmit = async ({ name, email, password }) => {
    const result = await signUp({ name, email, password });
    if (result.error) {
      fetchErrorHendler(result.error.status);
      return;
    }
    if (result.data) {
      dispatch(setToken(result.data.token));
    }
    reset();
  };

  return (
    <Box sx={{ maxWidth: '375px', mx: 'auto' }}>
      <Typography
        variant="h1"
        align="center"
        sx={{ mb: '10px', fontSize: '32px' }}
      >
        REGISTRATION
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl fullWidth sx={{ gap: 1 }}>
          <TextField
            label="Name"
            type="text"
            variant="outlined"
            size="small"
            placeholder="Input your name"
            error={!!errors?.name}
            helperText={errors?.name ? errors?.name?.message : null}
            {...register('name', {
              required: 'Name is required',
              maxLength: {
                value: 20,
                message: 'Only 20 symbols',
              },
            })}
          />
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            size="small"
            placeholder="Input your email"
            error={!!errors?.email}
            helperText={errors?.email ? errors?.email?.message : null}
            {...register('email', {
              required: 'Email is required',
              maxLength: {
                value: 30,
                message: 'Only 30 symbols',
              },
              pattern: {
                value:
                  /^(([0-9A-Za-z._%+-]{1,})@([-0-9A-Za-z]{1,}.){1,2}[-A-Za-z]{2,})$/iu,
                message: 'Email must be such view email@domein.com',
              },
            })}
          />
          <TextField
            label="Password"
            type={showPass ? 'text' : 'password'}
            variant="outlined"
            size="small"
            placeholder="Create a passowrd"
            error={!!errors?.password}
            helperText={errors?.password ? errors?.password?.message : null}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => handleClickShowPass(showPass, setShowPass)}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPass ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 7,
                message: 'Minimum 7 symbols',
              },
              maxLength: {
                value: 30,
                message: 'Only 30 symbols',
              },
            })}
          />
          <TextField
            label="Password confirmation"
            type={showConfPass ? 'text' : 'password'}
            variant="outlined"
            size="small"
            placeholder="Confirm the passowrd"
            error={!!errors?.confPass}
            helperText={errors?.confPass ? errors?.confPass?.message : null}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() =>
                      handleClickShowPass(showConfPass, setShowConfPass)
                    }
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showConfPass ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            {...register('confPass', {
              required: 'Password is required',
              validate: {
                positive: value =>
                  value === watchPass || "Passwords doesn't match",
              },
            })}
          />
          <LoadingButton
            type="submit"
            fullWidth
            loadingPosition="start"
            variant="contained"
            loading={isLoading}
            startIcon={<HowToReg />}
          >
            Register in
          </LoadingButton>
        </FormControl>
      </form>
    </Box>
  );
};

export default Register;

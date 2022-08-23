import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { authOperations, authSlice } from 'redux/auth';
import { handleClickShowPass, handleMouseDownPassword } from 'helpers';

import {
  Box,
  FormControl,
  TextField,
  IconButton,
  InputAdornment,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const { useLoginUserMutation } = authOperations;
const { setToken } = authSlice;

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const [login] = useLoginUserMutation();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async ({ email, password }) => {
    const result = await login({ email, password });
    if (result.data) {
      dispatch(setToken(result.data.token));
    }
    reset();
  };

  return (
    <Box>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl fullWidth sx={{ gap: 1 }}>
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
                  /^(([0-9A-Za-z]{1,})@([-0-9A-Za-z]{1,}.){1,2}[-A-Za-z]{2,})$/iu,
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
          <button type="submit">Sign in</button>
        </FormControl>
      </form>
    </Box>
  );
};

export default Login;

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations, authSlice } from 'redux/auth';
import { useForm } from 'react-hook-form';

import { Box, TextField, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const { useRegisterUserMutation } = authOperations;
const { setToken } = authSlice;

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const [showConfPass, setShowConfPass] = useState(false);
  const [signUp] = useRegisterUserMutation();
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

  const handleClickShowPass = (triggerState, trigger) => {
    trigger(!triggerState);
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const onSubmit = async ({ name, email, password }) => {
    const result = await signUp({ name, email, password });
    if (result.data) {
      dispatch(setToken(result.data.token));
    }
    reset();
  };

  return (
    <Box>
      <h1>REGISTRATION</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        {/* {console.log(watchPass, watchConfPass)} */}
        {/* <label htmlFor="name">
          <p>Name</p>
          <input
            id="name"
            type="text"
            name="name"
            title="Input your name"
            value={name}
            required
            onChange={e => setName(e.target.value)}
          />
        </label>
        <label htmlFor="email">
          <p>Email</p>
          <input
            id="email"
            type="email"
            name="email"
            title="Input email"
            value={email}
            required
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="pass">
          <p>Number</p>
          <input
            id="pass"
            type="password"
            name="pass"
            title="Input password"
            value={password}
            required
            onChange={e => setPass(e.target.value)}
          />
        </label> */}
        <button type="submit">Registrate</button>
      </form>
    </Box>
  );
};

export default Register;

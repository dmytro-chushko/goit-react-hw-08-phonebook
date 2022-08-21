import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations, authSlice } from 'redux/auth';

import {
  Box,
  TextField,
  IconButton,
  InputAdornment,
  FormControl,
  OutlinedInput,
  InputLabel,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const { useRegisterUserMutation } = authOperations;
const { setToken } = authSlice;

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [showPass, setShowPass] = useState(false);

  const [signUp] = useRegisterUserMutation();
  const dispatch = useDispatch();

  const handleClickShowPass = () => {
    setShowPass(!showPass);
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
    console.log('MouseDown');
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const result = await signUp({ name, email, password });
    if (result.data) {
      dispatch(setToken(result.data.token));
    }
    console.log(result.data);

    setName('');
    setEmail('');
    setPass('');
  };

  return (
    <Box>
      <h1>REGISTRATION</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          type="text"
          variant="outlined"
          size="small"
          placeholder="Input your name"
        />
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          size="small"
          placeholder="Input your email"
        />
        {/* <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPass ? 'text' : 'password'}
            value={password}
            onChange={e => {
              setPass(e.target.value);
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPass}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPass ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl> */}
        <TextField
          label="Password"
          type={showPass ? 'text' : 'password'}
          variant="outlined"
          size="small"
          sx={{ m: 1, width: '25ch' }}
          placeholder="Create a passowrd"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPass}
                  onMouseEnter={handleMouseDownPassword}
                  edge="end"
                >
                  {showPass ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <label htmlFor="name">
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
        </label>
        <button type="submit">Registrate</button>
      </form>
    </Box>
  );
};

export default Register;

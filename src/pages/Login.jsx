import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations, authSlice } from 'redux/auth';

const { useLoginUserMutation } = authOperations;
const { setToken } = authSlice;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [login] = useLoginUserMutation();
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    const result = await login({ email, password });
    if (result.data) {
      dispatch(setToken(result.data.token));
    }
    console.log(result.data.token);
    setEmail('');
    setPass('');
  };
  return (
    <>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Sign in</button>
      </form>
    </>
  );
};

export default Login;

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLoginUserMutation } from 'redux/contacts/contactsOperations';
import { setIsLoggedIn } from 'redux/contacts/contactsActions';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [login, result] = useLoginUserMutation();
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    const data = await login({ email, password });
    data.data?.token && dispatch(setIsLoggedIn(true));
    console.log(data.data.user);
    console.log(result);
    console.log(data.data.token);
    console.log(data);
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

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRegisterUserMutation } from 'redux/auth/authOperations';
import { setToken } from 'redux/auth/authSlice';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [signUp] = useRegisterUserMutation();
  const dispatch = useDispatch();

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
    <>
      <h1>REGISTRATION</h1>
      <form onSubmit={handleSubmit}>
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
    </>
  );
};

export default Register;

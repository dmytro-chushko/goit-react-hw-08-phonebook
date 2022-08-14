import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRegisterUserMutation } from 'redux/contacts/contactsOperations';
import { setIsLoggedIn } from 'redux/contacts/contactsActions';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [signUp, result] = useRegisterUserMutation();
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    const data = await signUp({ name, email, password });
    data.data?.token && dispatch(setIsLoggedIn(true));
    console.log(data.data.user);
    console.log(result);
    console.log(data.data.token);
    console.log(data);
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

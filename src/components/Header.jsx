import { NavLink, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getIsLoggedIn } from 'redux/contacts/contactsSelectors';
import { setIsLoggedIn } from 'redux/contacts/contactsActions';

const Header = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  console.log(isLoggedIn);
  const dispatch = useDispatch();
  const handleClick = () => dispatch(setIsLoggedIn(false));
  return (
    <>
      {!isLoggedIn ? (
        <>
          <NavLink to="login">Login</NavLink>
          <NavLink to="register">Registration</NavLink>
        </>
      ) : (
        <>
          <NavLink to="contacts">Contacts</NavLink>
          <button type="button" onClick={handleClick}>
            quit
          </button>
        </>
      )}
      <Outlet />
    </>
  );
};

export default Header;

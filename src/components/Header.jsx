import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { UserMenu } from './UserMenu';
import { getToken } from 'redux/auth/getToken';

const Header = () => {
  const isLoggedIn = useSelector(getToken);

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
          <UserMenu />
        </>
      )}
      <Outlet />
    </>
  );
};

export default Header;

import { NavLink, Outlet } from 'react-router-dom';
import { UserMenu } from './UserMenu';
import { useIsLoggedIn } from 'hooks/useIsLoggedIn';

const Header = () => {
  return (
    <>
      {!useIsLoggedIn() ? (
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

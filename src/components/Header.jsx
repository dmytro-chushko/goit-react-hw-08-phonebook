import { NavLink, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getIsLoggedIn, getUserName } from 'redux/contacts/contactsSelectors';
import { setIsLoggedIn } from 'redux/contacts/contactsActions';
import { useGetUserQuery } from 'redux/contacts/contactsOperations';

const Header = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const userName = useSelector(getUserName);
  const dispatch = useDispatch();
  const { data, isLoading } = useGetUserQuery();
  console.log(data);

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
          <p>Wellcome {userName}</p>
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

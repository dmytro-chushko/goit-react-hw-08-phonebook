import { NavLink, Outlet } from 'react-router-dom';
import { UserMenu } from './UserMenu';
import { useIsLoggedIn } from 'hooks/useIsLoggedIn';

import { Container, Box } from '@mui/material';

const Header = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        p: 1,
      }}
    >
      <Box sx={{ p: '10px' }}>
        <Box sx={{ display: 'flex', gap: 1 }}>
          {!useIsLoggedIn() ? (
            <>
              <NavLink to="login">Login</NavLink>
              <Box>or</Box>
              <NavLink to="register">Register</NavLink>
              <Box>If you havn't accaunt</Box>
            </>
          ) : (
            <>
              {/* <NavLink to="contacts">Contacts</NavLink> */}
              <UserMenu />
            </>
          )}
        </Box>
        <Outlet />
      </Box>
    </Container>
  );
};

export default Header;

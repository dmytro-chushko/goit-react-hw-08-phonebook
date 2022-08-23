import { NavLink, Outlet } from 'react-router-dom';
import { UserMenu } from './UserMenu';
import { useIsLoggedIn } from 'hooks/useIsLoggedIn';

import { Container, Box } from '@mui/material';

const Header = () => {
  return (
    <Container
      sx={{
        minHeight: '100%',
        height: 'auto',
        maxWidth: 375,
        mx: 'auto',
        p: 1,
      }}
    >
      <Box sx={{ height: '100%', border: '5px solid lightblue', p: '10px' }}>
        <Box sx={{ display: 'flex', gap: 1 }}>
          {!useIsLoggedIn() ? (
            <>
              <NavLink to="login">Login</NavLink>
              <Box>or</Box>
              <NavLink to="register">Registr</NavLink>
            </>
          ) : (
            <>
              <NavLink to="contacts">Contacts</NavLink>
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

import { Navigate } from 'react-router-dom';
import { useIsLoggedIn } from 'hooks/useIsLoggedIn';

export const PrivatRoute = ({ children, path }) => {
  return useIsLoggedIn() ? children : <Navigate to={path} replace />;
};

export const PublicRoute = ({ children, path }) => {
  return !useIsLoggedIn() ? children : <Navigate to={path} replace />;
};

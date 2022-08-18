import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getToken } from 'redux/auth/getToken';

const useIsLoggedIn = () => useSelector(getToken);

export const PrivatRoute = ({ children, path }) => {
  return useIsLoggedIn() ? children : <Navigate to={path} replace />;
};

export const PublicRoute = ({ children, path }) => {
  return !useIsLoggedIn() ? children : <Navigate to={path} replace />;
};

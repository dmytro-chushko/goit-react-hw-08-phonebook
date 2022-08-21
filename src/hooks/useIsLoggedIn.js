import { useSelector } from 'react-redux';
import { getToken } from 'redux/auth';

export const useIsLoggedIn = () => useSelector(getToken);

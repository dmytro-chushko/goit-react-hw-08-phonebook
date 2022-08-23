import { useDispatch } from 'react-redux';
import { authOperations, authSlice } from 'redux/auth';
import { Box } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Logout } from '@mui/icons-material';

const { useGetUserQuery, useLogOutUserMutation } = authOperations;
const { unsetToken } = authSlice;

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { data, isLoading: isLoadingQuery } = useGetUserQuery();
  const [logOut, { isLoading }] = useLogOutUserMutation();

  const handleClick = async () => {
    await logOut();
    dispatch(unsetToken());
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <Box>{isLoadingQuery ? 'Loading' : `Wellcome ${data.name}`}</Box>
      <LoadingButton
        type="button"
        onClick={handleClick}
        loadingPosition="start"
        variant="contained"
        loading={isLoading}
        startIcon={<Logout />}
      >
        quit
      </LoadingButton>
    </Box>
  );
};

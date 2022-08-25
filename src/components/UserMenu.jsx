import { useDispatch } from 'react-redux';
import { authOperations, authSlice } from 'redux/auth';
import { Box, Typography } from '@mui/material';
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
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
      }}
    >
      <Box>
        {isLoadingQuery ? (
          'Loading'
        ) : (
          <>
            Wellcome{' '}
            <Typography variant="span" size="large" sx={{ fontWeight: '700' }}>
              {data.name}
            </Typography>
          </>
        )}
      </Box>
      <LoadingButton
        type="button"
        onClick={handleClick}
        loadingPosition="start"
        variant="contained"
        loading={isLoading}
        startIcon={<Logout />}
      >
        logout
      </LoadingButton>
    </Box>
  );
};

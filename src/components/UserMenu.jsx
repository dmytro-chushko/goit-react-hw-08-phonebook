import { useDispatch } from 'react-redux';
import { authOperations, authSlice } from 'redux/auth';

const { useGetUserQuery, useLogOutUserMutation } = authOperations;
const { unsetToken } = authSlice;

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetUserQuery();
  const [logOut] = useLogOutUserMutation();

  const handleClick = async () => {
    await logOut();
    dispatch(unsetToken());
  };

  return (
    <>
      <p>{isLoading ? 'Loading' : `Wellcome ${data.name}`}</p>
      <button type="button" onClick={handleClick}>
        quit
      </button>
    </>
  );
};

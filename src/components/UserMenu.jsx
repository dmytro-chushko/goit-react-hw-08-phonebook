import { useDispatch } from 'react-redux';
import {
  useGetUserQuery,
  useLogOutUserMutation,
} from 'redux/contacts/contactsOperations';
import { unsetToken } from 'redux/auth/authSlice';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetUserQuery();
  console.log(data);
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
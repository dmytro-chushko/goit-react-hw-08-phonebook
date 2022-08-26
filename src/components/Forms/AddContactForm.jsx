import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useForm } from 'react-hook-form';

import { TextField, FormControl } from '@mui/material';
import { PersonAdd } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';

import {
  useGetContactsQuery,
  useAddContactMutation,
} from 'redux/contacts/contactsOperations';
import { isNameInContacts, fetchErrorHendler } from 'helpers';

export const AddContactForm = () => {
  const { data, error } = useGetContactsQuery();
  const [addContact, { isLoading }] = useAddContactMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      number: '',
    },
  });

  const onSubmit = async ({ name, number }) => {
    const result = await addContact({ name, number });
    if (result.error) {
      fetchErrorHendler(result.error.status);
      return;
    }
    Notify.success('New contact has added');
    reset();
  };

  if (error)
    Notify.failure(
      'Something wrong, check your internet connection and try later'
    );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl fullWidth sx={{ gap: 1 }}>
        <TextField
          label="Name"
          type="text"
          variant="outlined"
          size="small"
          placeholder="Input name of the contact"
          error={!!errors?.name}
          helperText={errors?.name ? errors?.name?.message : null}
          {...register('name', {
            required: 'Name is required',
            maxLength: {
              value: 20,
              message: 'Only 20 symbols',
            },
            pattern: {
              value:
                /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
              message:
                "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
            },
            validate: {
              isName: () => {
                const getName = getValues('name');
                const isName = !isNameInContacts(data, getName);
                return isName || 'This name allready exist in contacts list';
              },
            },
          })}
        />
        <TextField
          label="Phone"
          type="text"
          variant="outlined"
          size="small"
          placeholder="Input phone number"
          error={!!errors?.number}
          helperText={errors?.number ? errors?.number?.message : null}
          {...register('number', {
            required: 'Number is required',
            minLength: {
              value: 5,
              message: 'must be at least 5 characters',
            },
            maxLength: {
              value: 13,
              message: 'Only 13 symbols',
            },
            pattern: {
              value:
                /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
              message:
                'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
            },
          })}
        />
        <LoadingButton
          type="submit"
          fullWidth
          loadingPosition="start"
          variant="contained"
          loading={isLoading}
          startIcon={<PersonAdd />}
        >
          Add contact
        </LoadingButton>
      </FormControl>
    </form>
  );
};

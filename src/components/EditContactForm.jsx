import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useForm } from 'react-hook-form';
import { TextField, FormControl } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Edit } from '@mui/icons-material';
import { contactsOperations } from 'redux/contacts';
import { isNameInContacts } from 'helpers';

const { useGetContactsQuery, useUpdatingContactMutation } = contactsOperations;

export const EditContactForm = ({ id }) => {
  const { data } = useGetContactsQuery();
  const [updateContact, { isLoading, error }] = useUpdatingContactMutation();
  const filteredData = data.filter(contact => contact.id === id);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: filteredData[0].name,
      number: filteredData[0].number,
    },
  });
  const getName = getValues('name');

  const onSubmit = async ({ name, number }) => {
    console.log(name, number);
    await updateContact(id, { name, number });
    if (error) {
      Notify.failure('Something wrong, check your connection');
      return;
    }
    Notify.success('Contact has updated');
  };

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
            // validate: {
            //   isName: () =>
            //     !isNameInContacts(data, getName) ||
            //     'This name allready exist in contacts list',
            // },
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
          startIcon={<Edit />}
        >
          Edit contact
        </LoadingButton>
      </FormControl>
    </form>
  );
};

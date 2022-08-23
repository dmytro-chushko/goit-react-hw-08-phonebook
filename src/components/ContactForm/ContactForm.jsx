import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid';
import { useForm } from 'react-hook-form';
import css from './ContactForm.module.css';

import {
  TextField,
  IconButton,
  InputAdornment,
  Typography,
  FormControl,
} from '@mui/material';
import { PersonAdd } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';

import {
  useGetContactsQuery,
  useAddContactMutation,
} from 'redux/contacts/contactsOperations';

import { IoMdPerson, IoMdPersonAdd } from 'react-icons/io';
import { FaPhone } from 'react-icons/fa';
import { Loader } from 'rsuite';

const ContactForm = () => {
  const { data, isLoading: isLoadingQuery } = useGetContactsQuery();
  const [addContact, { isLoading }] = useAddContactMutation();
  const inputNameId = nanoid();
  const inputNumberId = nanoid();
  const {
    register,
    handleSubmit,
    watch,
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
  const watchName = watch('name', '');

  const onSubmit = ({ name, number }) => {
    console.log(getValues());
    // const form = e.currentTarget;
    // const name = form.elements.name.value;
    // const normalizeName = name.toLowerCase();

    // if (data.find(contact => contact.name.toLowerCase() === normalizeName)) {
    //   Notify.failure('This name allready added');
    //   return;
    // }

    // const number = form.elements.number.value;

    // await addContact({ name, number });
    // reset();
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
              message: 'must be at Least 5 characters',
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
      {/* <label className={css.label} htmlFor={inputNameId}>
        <p className={css.labelTitle}>Name</p>
        <IoMdPerson className={css.icon} />
        <input
          id={inputNameId}
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.label} htmlFor={inputNumberId}>
        <p className={css.labelTitle}>Number</p>
        <FaPhone className={css.icon} />
        <input
          id={inputNumberId}
          className={css.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label> */}
    </form>
  );
};

export default ContactForm;

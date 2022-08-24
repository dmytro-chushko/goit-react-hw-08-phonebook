import { useSelector } from 'react-redux/es/exports';
import { contactsOperations, getFilter } from 'redux/contacts';
import { Grid } from '@mui/material';
import css from './ContactList.module.css';
import { getVisibleContacts } from 'helpers';

import ContactItem from 'components/ContactItem';

const { useGetContactsQuery } = contactsOperations;

const ContactList = () => {
  const { data: contacts, isLoading } = useGetContactsQuery();
  const filter = useSelector(getFilter);

  return isLoading ? (
    <div>Загружаем...</div>
  ) : (
    <Grid container spacing={2} justifyContent="center">
      {getVisibleContacts(filter, contacts).map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </Grid>
  );
};

export default ContactList;

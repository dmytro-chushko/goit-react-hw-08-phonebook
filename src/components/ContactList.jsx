import { Notify } from 'notiflix';
import { useSelector } from 'react-redux/es/exports';
import { contactsOperations, getFilter } from 'redux/contacts';
import { Grid, Typography } from '@mui/material';
import { getVisibleContacts } from 'helpers';

import ContactItem from 'components/ContactItem';
import { ContactsSkeleton } from 'components/ContactsSkeleton';

const { useGetContactsQuery } = contactsOperations;

const ContactList = () => {
  const { data: contacts, isLoading, error } = useGetContactsQuery();
  const filter = useSelector(getFilter);

  if (error)
    Notify.failure(
      'Something wrong, check your internet connection and try later'
    );

  return (
    <Grid container spacing={2} justifyContent="center">
      {isLoading ? (
        <ContactsSkeleton />
      ) : contacts.length > 0 ? (
        getVisibleContacts(filter, contacts).map(({ id, name, number }) => (
          <ContactItem key={id} id={id} name={name} number={number} />
        ))
      ) : (
        <Grid item>
          <Typography variant="body1" sx={{ mx: 'auto' }}>
            There are no contacts yet here, you could add some
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default ContactList;

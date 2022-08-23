import { Box, Typography } from '@mui/material';

import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

const Contacts = () => {
  return (
    <>
      <Typography
        variant="h1"
        align="center"
        sx={{ mb: '10px', fontSize: '32px' }}
      >
        CONTACTS
      </Typography>
      <Box sx={{ maxWidth: '375px', mx: 'auto' }}>
        <ContactForm />
      </Box>

      <Filter />
      <ContactList />
    </>
  );
};

export default Contacts;

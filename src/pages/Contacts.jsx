import { useState } from 'react';

import { Box, Button, Typography } from '@mui/material';

import { ModalOfContacts } from 'components/ModalOfContacts';
import { AddContactForm } from 'components/Forms';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

const Contacts = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box>
      <Typography
        variant="h1"
        align="center"
        sx={{ mb: '10px', fontSize: '32px' }}
      >
        CONTACTS
      </Typography>
      <Box sx={{ maxWidth: '375px', mx: 'auto' }}>
        <Button
          variant="contained"
          onClick={() => setOpen(true)}
          fullWidth
          sx={{ mb: '10px' }}
        >
          Add contact
        </Button>
        <ModalOfContacts open={open} setOpen={setOpen}>
          <AddContactForm />
        </ModalOfContacts>
      </Box>
      <Filter />
      <ContactList />
    </Box>
  );
};

export default Contacts;

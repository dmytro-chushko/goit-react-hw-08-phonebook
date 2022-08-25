import { useState } from 'react';

import {
  Box,
  Button,
  Typography,
  IconButton,
  Dialog,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { Close } from '@mui/icons-material';

import ContactForm from 'components/ContactForm';
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
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogActions sx={{ p: 0 }}>
            <IconButton
              aria-label="close"
              variant="contained"
              onClick={() => setOpen(false)}
              sx={{
                position: 'absolute',
                right: 0,
                top: 0,
                p: 0,
              }}
            >
              <Close />
            </IconButton>
          </DialogActions>
          <DialogContent sx={{ maxWidth: '375px' }}>
            <ContactForm />
          </DialogContent>
        </Dialog>
      </Box>

      <Filter />
      <ContactList />
    </Box>
  );
};

export default Contacts;

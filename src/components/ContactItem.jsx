import PropTypes from 'prop-types';
import { useState } from 'react';
import { Grid, Paper, Box, Typography, Button, Tooltip } from '@mui/material';
import { AccountCircle, PersonRemove, Phone, Edit } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { useDeleteContactMutation } from 'redux/contacts/contactsOperations';
import { ModalOfContacts } from 'components/ModalOfContacts';
import { EditContactForm } from 'components/Forms';
import { fetchErrorHendler } from 'helpers';

const ContactItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const [elevation, setElevation] = useState(3);
  const [open, setOpen] = useState(false);

  const handleClick = async id => {
    const result = await deleteContact(id);
    if (result.error) {
      fetchErrorHendler(result.error.status);
      return;
    }
  };

  return (
    <>
      <Grid item xs={12} sm={4} md={3}>
        <Paper
          elevation={elevation}
          onMouseEnter={() => setElevation(8)}
          onMouseLeave={() => setElevation(3)}
        >
          <Box sx={{ p: 1 }}>
            <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <AccountCircle /> {name}
            </Typography>
            <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Phone /> {number}
            </Typography>
            <Typography align="center">
              <Tooltip title="Edit contact">
                <Button
                  aria-label="edit contact"
                  onClick={() => setOpen(true)}
                  variant="contained"
                  sx={{ mr: '10px' }}
                >
                  <Edit />
                </Button>
              </Tooltip>
              <Tooltip title="Delete contact">
                <LoadingButton
                  aria-label="delete contact"
                  onClick={() => handleClick(id)}
                  loading={isLoading}
                  variant="contained"
                >
                  <PersonRemove />
                </LoadingButton>
              </Tooltip>
            </Typography>
          </Box>
        </Paper>
      </Grid>
      <ModalOfContacts open={open} setOpen={setOpen}>
        <EditContactForm id={id} />
      </ModalOfContacts>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;

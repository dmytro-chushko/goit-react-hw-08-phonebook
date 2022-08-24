import PropTypes from 'prop-types';
import { Grid, Paper, Box, Typography } from '@mui/material';
import { AccountCircle, PersonRemove } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import css from './ContactItem.module.css';
import { useDeleteContactMutation } from 'redux/contacts/contactsOperations';

import { IoMdPerson } from 'react-icons/io';
import { FaPhone, FaTrashAlt } from 'react-icons/fa';
// import { Loader } from 'rsuite';

const ContactItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const handleClick = async id => {
    await deleteContact(id);
  };

  return (
    <>
      <Grid item xs={12} sm={4} md={3}>
        <Paper elevation={3}>
          <Box sx={{ p: 1 }}>
            <Typography>
              <AccountCircle /> {name}
            </Typography>
            <Typography>
              <FaPhone /> {number}
            </Typography>
            <Typography align="right">
              <LoadingButton
                aria-label="delete contact"
                onClick={() => handleClick(id)}
                loading={isLoading}
                variant="contained"
                sx={{ ml: 'auto' }}
              >
                <PersonRemove />
              </LoadingButton>
            </Typography>

            {/* <button type="button" onClick={() => handleClick(id)}>
              {/* {pending ? <Loader size="sm" /> : <FaTrashAlt />} */}
            {/* <FaTrashAlt />
            </button> */}
          </Box>
        </Paper>
      </Grid>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;

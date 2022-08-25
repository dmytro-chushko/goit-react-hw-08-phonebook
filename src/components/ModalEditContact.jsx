import PropTypes from 'prop-types';
import {
  Dialog,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Close } from '@mui/icons-material';
import { EditContactForm } from './EditContactForm';

export const ModalEditContact = ({ open, setOpen, id, name, number }) => {
  return (
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
        <EditContactForm id={id} />
      </DialogContent>
    </Dialog>
  );
};

ModalEditContact.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

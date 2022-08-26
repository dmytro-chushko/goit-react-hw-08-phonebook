import PropTypes from 'prop-types';
import {
  Dialog,
  DialogContent,
  DialogActions,
  IconButton,
} from '@mui/material';
import { Close } from '@mui/icons-material';

export const ModalOfContacts = ({ open, setOpen, children }) => {
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
      <DialogContent sx={{ maxWidth: '375px' }}>{children}</DialogContent>
    </Dialog>
  );
};

ModalOfContacts.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

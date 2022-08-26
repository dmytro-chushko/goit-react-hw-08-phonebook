import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/contactsFilterSlice';

import { Box, TextField, InputAdornment } from '@mui/material';
import { Search } from '@mui/icons-material';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Box sx={{ mb: '10px', textAlign: 'center' }}>
      <TextField
        label="Find your contacts by name"
        type="text"
        variant="outlined"
        size="small"
        placeholder="Begin to type name"
        onChange={e => dispatch(setFilter(e.currentTarget.value))}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search color="primary" />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default Filter;

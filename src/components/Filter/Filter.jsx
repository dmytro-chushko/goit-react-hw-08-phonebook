import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/contactsFilterSlice';
import { getFilter } from 'redux/contacts';
import { nanoid } from 'nanoid';

import { TextField, InputAdornment } from '@mui/material';
import { Search } from '@mui/icons-material';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <TextField
      label="Find your contacts by name"
      type="text"
      variant="outlined"
      size="small"
      value={filter}
      placeholder="Begin to type name"
      onChange={e => dispatch(setFilter(e.currentTarget.value))}
      sx={{ mb: '10px' }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search color="primary" />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default Filter;

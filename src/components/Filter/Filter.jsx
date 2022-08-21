import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/contactsFilterSlice';
import { getFilter } from 'redux/contacts';
import { nanoid } from 'nanoid';
import css from './Filter.module.css';

import { IoIosSearch } from 'react-icons/io';

const Filter = () => {
  const inputFilterId = nanoid();
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <>
      <label className={css.labelTitle} htmlFor={inputFilterId}>
        <p className={css.labelTitle}>Find contacts by name</p>
        <input
          id={inputFilterId}
          className={css.input}
          type="text"
          value={filter}
          onChange={e => dispatch(setFilter(e.currentTarget.value))}
        />
        <IoIosSearch className={css.searchIcon} />
      </label>
    </>
  );
};

export default Filter;

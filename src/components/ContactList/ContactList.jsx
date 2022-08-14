import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import css from './ContactList.module.css';
import { getVisibleContacts } from 'helpers/getVisibleContacts';

import ContactItem from 'components/ContactItem';

const ContactList = () => {
  const { getContactsSelector, getFilterSelector } = contactsSelectors;
  const contacts = useSelector(getContactsSelector);
  const filter = useSelector(getFilterSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  }, [dispatch]);

  return (
    <>
      <ul className={css.list}>
        {getVisibleContacts(filter, contacts).map(({ id, name, phone }) => (
          <ContactItem key={id} id={id} name={name} phone={phone} />
        ))}
      </ul>
    </>
  );
};

export default ContactList;

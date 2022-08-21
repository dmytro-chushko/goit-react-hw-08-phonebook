import { useSelector } from 'react-redux/es/exports';
import { contactsOperations, getFilter } from 'redux/contacts';
import css from './ContactList.module.css';
import { getVisibleContacts } from 'helpers/getVisibleContacts';

import ContactItem from 'components/ContactItem';

const { useGetContactsQuery } = contactsOperations;

const ContactList = () => {
  const { data: contacts, isLoading } = useGetContactsQuery();
  const filter = useSelector(getFilter);

  return (
    <>
      <ul className={css.list}>
        {isLoading ? (
          <div>Загружаем...</div>
        ) : (
          getVisibleContacts(filter, contacts).map(({ id, name, number }) => (
            <ContactItem key={id} id={id} name={name} number={number} />
          ))
        )}
      </ul>
    </>
  );
};

export default ContactList;

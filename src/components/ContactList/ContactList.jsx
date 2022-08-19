import { useSelector } from 'react-redux/es/exports';
import { useGetContactsQuery } from 'redux/contacts/contactsOperations';
import getFilter from 'redux/contacts/getFilter';
import css from './ContactList.module.css';
import { getVisibleContacts } from 'helpers/getVisibleContacts';

import ContactItem from 'components/ContactItem';

// const filter = useSelector(getFilter);

const ContactList = () => {
  const { data: contacts, isLoading } = useGetContactsQuery();
  console.log(contacts);
  const filter = useSelector(getFilter);
  console.log(filter);
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

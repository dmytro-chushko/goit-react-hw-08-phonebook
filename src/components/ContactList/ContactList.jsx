import { useSelector } from 'react-redux/es/exports';
import { useGetContactsQuery } from 'redux/contacts/contactsOperations';
import { getFilter } from 'redux/contacts/getFilter';
import css from './ContactList.module.css';
import { getVisibleContacts } from 'helpers/getVisibleContacts';

import ContactItem from 'components/ContactItem';

// const filter = useSelector(getFilter);

const ContactList = () => {
  const { data } = useGetContactsQuery();
  console.log(data);
  return (
    <>
      <p>{data}</p>
      {/* <ul className={css.list}>
        {getVisibleContacts(filter, contacts).map(({ id, name, phone }) => (
          <ContactItem key={id} id={id} name={name} phone={phone} />
        ))}
      </ul> */}
    </>
  );
};

export default ContactList;

import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

const Contacts = () => {
  return (
    <>
      <h1>CONTACTS</h1>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
};

export default Contacts;

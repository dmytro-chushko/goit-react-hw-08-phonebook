// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { nanoid } from 'nanoid';
// import css from './ContactForm.module.css';
// import { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux/es/exports';
// import { contactsSelectors, contactsOperations } from 'redux/contacts';

// import { IoMdPerson, IoMdPersonAdd } from 'react-icons/io';
// import { FaPhone } from 'react-icons/fa';
// import { Loader } from 'rsuite';

// const ContactForm = () => {
//   const { getContactsSelector, getPending } = contactsSelectors;
//   const contacts = useSelector(getContactsSelector);
//   const pending = useSelector(getPending);
//   const dispatch = useDispatch();
//   const [isLoading, setIsLoading] = useState(false);
//   const inputNameId = nanoid();
//   const inputNumberId = nanoid();

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     const name = form.elements.name.value;
//     const normalizeName = name.toLowerCase();

//     if (
//       contacts.find(contact => contact.name.toLowerCase() === normalizeName)
//     ) {
//       Notify.failure('This name allready added');
//       return;
//     }

//     const phone = form.elements.phone.value;

//     setIsLoading(true);
//     dispatch(contactsOperations.addContact({ name, phone }));
//     form.reset();
//   };

//   useEffect(() => {
//     if (!pending && isLoading) {
//       setIsLoading(false);
//     }
//   }, [pending, isLoading]);

//   return (
//     <form className={css.form} onSubmit={handleSubmit}>
//       <label className={css.label} htmlFor={inputNameId}>
//         <p className={css.labelTitle}>Name</p>
//         <IoMdPerson className={css.icon} />
//         <input
//           id={inputNameId}
//           className={css.input}
//           type="text"
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//         />
//       </label>
//       <label className={css.label} htmlFor={inputNumberId}>
//         <p className={css.labelTitle}>Number</p>
//         <FaPhone className={css.icon} />
//         <input
//           id={inputNumberId}
//           className={css.input}
//           type="tel"
//           name="phone"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//         />
//       </label>
//       <button className={css.button} type="submit">
//         {isLoading ? (
//           <Loader className={css.buttonIcon} size="sm" />
//         ) : (
//           <IoMdPersonAdd className={css.buttonIcon} size={18} />
//         )}
//         Add contact
//       </button>
//     </form>
//   );
// };

// export default ContactForm;

// import PropTypes from 'prop-types';
// import css from './ContactItem.module.css';
// import { useState } from 'react';
// import { useDispatch } from 'react-redux/es/exports';
// import { contactsOperations } from 'redux/contacts';

// import { IoMdPerson } from 'react-icons/io';
// import { FaPhone, FaTrashAlt } from 'react-icons/fa';
// import { Loader } from 'rsuite';

// const ContactItem = ({ id, name, phone }) => {
//   const [pending, setPending] = useState(false);
//   const dispatch = useDispatch();

//   const handleClick = id => {
//     dispatch(contactsOperations.deleteContact(id));
//     setPending(true);
//   };

//   return (
//     <>
//       <li className={css.item}>
//         <IoMdPerson /> {name}: <FaPhone /> {phone}
//         <button type="button" onClick={() => handleClick(id)}>
//           {pending ? <Loader size="sm" /> : <FaTrashAlt />}
//         </button>
//       </li>
//     </>
//   );
// };

// ContactItem.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired,
// };

// export default ContactItem;

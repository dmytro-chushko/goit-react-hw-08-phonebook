import PropTypes from 'prop-types';
import css from './ContactItem.module.css';
import { useDeleteContactMutation } from 'redux/contacts/contactsOperations';

import { IoMdPerson } from 'react-icons/io';
import { FaPhone, FaTrashAlt } from 'react-icons/fa';
// import { Loader } from 'rsuite';

const ContactItem = ({ id, name, number }) => {
  const [deleteContact] = useDeleteContactMutation();

  const handleClick = async id => {
    await deleteContact(id);
  };

  return (
    <>
      <li className={css.item}>
        <IoMdPerson /> {name}: <FaPhone /> {number}
        <button type="button" onClick={() => handleClick(id)}>
          {/* {pending ? <Loader size="sm" /> : <FaTrashAlt />} */}
          <FaTrashAlt />
        </button>
      </li>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;

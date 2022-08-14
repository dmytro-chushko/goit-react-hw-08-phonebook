import axios from 'axios';

const BASE_URL = 'https://62f18a61b1098f1508023cf4.mockapi.io/contacts';

export const getContacts = async () => {
  const contacts = await axios(BASE_URL);
  return contacts.data;
};

export const addContact = async contact => {
  const addedContact = await axios.post(BASE_URL, contact);
  return addedContact.data;
};

export const deleteContact = async id => {
  const deletedContact = await axios.delete(`${BASE_URL}/${id}`);
  return deletedContact.data;
};

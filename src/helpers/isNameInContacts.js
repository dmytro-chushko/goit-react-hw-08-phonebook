export const isNameInContacts = (data, name) => {
  const normalizeName = name.toLowerCase();
  return data.find(contact => contact.name.toLowerCase() === normalizeName);
};

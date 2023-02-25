export const getContacts = store => store.contacts;

export const getFilteredContacts = ({ contacts, filter }) => {
  console.log();
  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  return filteredContacts;
};

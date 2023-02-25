import React from 'react';
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { getFilteredContacts } from 'redux/contacts/contacts-selectors';

import ContactItem from 'components/ContactItem/ContactItem';
import { List } from './Contacts.styled';

export const Contacts = () => {
  const contacts = useSelector(getFilteredContacts);

  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </List>
  );
};
export default Contacts;

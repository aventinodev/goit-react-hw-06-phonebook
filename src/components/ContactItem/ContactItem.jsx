import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-slice';
import { Item, Button } from './ContactItem.styled';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const onDeleteContacts = id => {
    dispatch(deleteContact(id));
  };

  return (
    <Item>
      <p>
        {name}: {number}
      </p>
      <Button type="button" onClick={() => onDeleteContacts(id)}>
        Delete
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;

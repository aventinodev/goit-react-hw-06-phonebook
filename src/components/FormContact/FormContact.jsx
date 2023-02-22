import React from 'react';
import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { addContact } from 'redux/actions';
import { getFilteredContacts } from 'redux/selectors';

import { Form, Label, Input, Button } from './FormContact.styled';

const FormContact = () => {
  const initialState = {
    name: '',
    number: '',
  };
  const [state, setState] = useState({ ...initialState });
  const { name, number } = state;

  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const onAddContact = e => {
    e.preventDefault();
    const normalizedName = name.toLowerCase();
    const checkName = contacts.find(
      contact => contact.name.toLowerCase() === normalizedName
    );
    if (checkName) {
      return alert(` ${name} is alredy in contacts`);
    }
    const checkNumber = contacts.find(contact => contact.number === number);
    if (checkNumber) {
      return alert(`Contact with ${number} is already  exist`);
    }

    dispatch(addContact({ name, number }));
    setState({ ...initialState });
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  return (
    <Form onSubmit={onAddContact}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default FormContact;

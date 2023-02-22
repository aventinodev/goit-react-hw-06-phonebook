import { ADD_CONTACT, DELETE_CONTACT, SET_FILTER } from './constants';

const initialStore = {
  contacts: [],
  filter: '',
};

const reducer = (store = initialStore, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return { ...store, contacts: [...store.contacts, action.payload] };
    case DELETE_CONTACT:
      const result = store.contacts.filter(
        contact => contact.id !== action.payload
      );
      return { ...store, contacts: result };
    case SET_FILTER:
      return { ...store, filter: action.payload };
    default:
      return store;
  }
};

export default reducer;

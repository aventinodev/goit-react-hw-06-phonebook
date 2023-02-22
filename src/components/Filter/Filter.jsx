// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/actions';

import { Label, Input } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onSetFilter = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <Label>
      Find contacts by name
      <Input type="text" name="filter" value={filter} onChange={onSetFilter} />
    </Label>
  );
};

export default Filter;

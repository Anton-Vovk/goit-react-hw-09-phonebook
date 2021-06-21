import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from '../../redux/phonebook/phonebook-actions';
import { getFilter } from '../../redux/phonebook/phonebook-selectors';
import styles from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <>
      <h4 className={styles.title}>Find contacts by name </h4>
      <label className={styles.label}>
        <input
          className={styles.input}
          name="filter"
          type="text"
          value={filter}
          onChange={event => dispatch(filterContacts(event.target.value))}
          placeholder="Search name"
        ></input>
      </label>
    </>
  );
};

export default Filter;

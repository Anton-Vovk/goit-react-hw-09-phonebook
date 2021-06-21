import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/phonebook/phonebook-operations';
import { getContacts } from '../../redux/phonebook/phonebook-selectors';

function ContactForm() {
  const myContacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameChange = ({ target }) => {
    setName(prevName => target.value);
  };

  const numberChange = ({ target }) => {
    setNumber(prevNumber => target.value);
  };

  const submitHandler = event => {
    event.preventDefault();

    const hasContactName = myContacts.some(item => {
      return item.name === name;
    });
    const hasContactNumber = myContacts.some(item => {
      return item.number === number;
    });

    if (hasContactName) {
      alert(`${name} is already in contacts!!!`);
      return;
    }
    if (hasContactNumber) {
      alert(`${number} is already in contacts!!!`);
      return;
    }

    dispatch(addContact(name, number));
    setName(prevName => '');
    setNumber(prevNumber => '');
  };

  return (
    <>
      <form className={styles.form} onSubmit={submitHandler}>
        <label className={styles.label}>
          Name
          <input
            className={styles.input}
            name="name"
            type="text"
            value={name}
            onChange={nameChange}
            placeholder="Add name"
            required
          ></input>
        </label>
        <label className={styles.label}>
          Number
          <input
            className={styles.input}
            name="number"
            type="tel"
            value={number}
            onChange={numberChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            placeholder="111-11-11"
            required
          ></input>
        </label>
        <button className={styles.button} type="submit">
          Add contact
        </button>
        <ToastContainer autoClose={3000} />
      </form>
    </>
  );
}

export default ContactForm;

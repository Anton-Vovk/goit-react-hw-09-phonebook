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
  const [contact, setContact] = useState({
    name: '',
    number: '',
  });

  const handleContactChange = event => {
    let inputName = event.currentTarget.dataset.name;
    let inputValue = event.currentTarget.value;
    setContact(prev => ({ ...prev, [inputName]: inputValue }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    const hasContactName = myContacts.some(item => {
      return item.name === contact.name;
    });
    const hasContactNumber = myContacts.some(item => {
      return item.number === contact.number;
    });

    if (hasContactName) {
      alert(`${contact.name} is already in contacts!!!`);
      return;
    }
    if (hasContactNumber) {
      alert(`${contact.number} is already in contacts!!!`);
      return;
    }

    dispatch(addContact(contact.name, contact.number));
    reset();
  };

  const reset = () => {
    setContact({ name: '', number: '' });
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit} type="submit">
        <label className={styles.label}>
          Name
          <input
            className={styles.input}
            name="name"
            type="text"
            value={contact.name}
            onChange={handleContactChange}
            placeholder="Add name"
            data-name="name"
            required
          ></input>
        </label>
        <label className={styles.label}>
          Number
          <input
            className={styles.input}
            name="number"
            type="tel"
            value={contact.number}
            onChange={handleContactChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            placeholder="111-11-11"
            data-name="number"
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

import React, { useState } from 'react';
import { register } from '../../redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import styles from './RegisterForm.module.css';

function RegisterForm() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = event => {
    const fieldName = event.currentTarget.dataset.name;
    const fieldValue = event.currentTarget.value;
    setUser(prev => ({ ...prev, [fieldName]: fieldValue }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(register(user));
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.registrationLabel}>
          <span className={styles.inputTitle}>Name</span>
          <input
            className={styles.registrationInput}
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            data-name="name"
          ></input>
        </label>
        <label className={styles.registrationLabel}>
          <span className={styles.inputTitle}>Email</span>
          <input
            className={styles.registrationInput}
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            data-name="email"
          ></input>
        </label>
        <label className={styles.registrationLabel}>
          <span className={styles.inputTitle}>Password</span>
          <input
            className={styles.registrationInput}
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            data-name="password"
          ></input>
        </label>
        <button className={styles.registrationButton} type="submit">
          Register
        </button>
      </form>
    </>
  );
}

export default RegisterForm;

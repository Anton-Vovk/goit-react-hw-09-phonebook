import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';
import styles from './LoginForm.module.css';

function LoginForm() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
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
    dispatch(login(user));
  };

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.loginLabel}>
          <span className={styles.inputTitle}>Email</span>
          <input
            className={styles.loginInput}
            type="email"
            name="email"
            data-name="email"
            value={user.email}
            onChange={handleChange}
          ></input>
        </label>
        <label className={styles.loginLabel}>
          <span className={styles.inputTitle}>Password</span>
          <input
            className={styles.loginInput}
            type="password"
            name="password"
            data-name="password"
            value={user.password}
            onChange={handleChange}
          ></input>
        </label>
        <button className={styles.loginButton}>Login</button>
      </form>
    </div>
  );
}

export default LoginForm;

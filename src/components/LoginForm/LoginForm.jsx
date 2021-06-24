import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';
import styles from './LoginForm.module.css';

function LoginForm() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();

  // const emailChange = ({ target }) => {
  //   setEmail(prevEmail => target.value);
  // };

  // const passwordChange = ({ target }) => {
  //   setPassword(prevPass => target.value);
  // };

  // const submitHandler = event => {
  //   event.preventDefault();
  //   dispatch(login({ email, password }));
  //   setEmail(prevMail => '');
  //   setPassword(prevPas => '');
  // };
  const handleChange = event => {
    event.preventDefault();
    dispatch(login({ user }));
    const fieldName = event.target.dataset.name;
    const fieldValue = event.target.value;
    setUser(prev => ({ ...prev, [fieldName]: fieldValue }));
  };

  return (
    <div>
      <form className={styles.form} onSubmit={handleChange}>
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

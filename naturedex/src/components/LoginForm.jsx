import React from 'react';
import { Link } from 'react-router-dom';
import LoginFormCSS from './LoginForm.module.css';

const LoginForm = () => {
  return (
    <div className={LoginFormCSS.loginContainer}>
      <h1>LOGIN</h1>
      <form className={LoginFormCSS.loginForm}>
        <div className={LoginFormCSS.formGroup}>
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" placeholder="Correo" className={LoginFormCSS.input} />
        </div>
        <div className={LoginFormCSS.formGroup}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="*******" className={LoginFormCSS.input} />
        </div>
        <button type="submit" className={LoginFormCSS.loginButton}>Log in</button>
      </form>
      <p className={LoginFormCSS.signupMessage}>
        You do not have an account yet? <Link to="/register" className={LoginFormCSS.signupLink}>Sign up</Link>
      </p>
    </div>
  );
};

export default LoginForm;
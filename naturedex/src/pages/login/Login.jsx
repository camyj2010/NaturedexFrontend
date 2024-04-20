import React from 'react';
import LoginCSS from './Login.module.css'
import LoginForm from '../../components/LoginForm';

const Login = () => {

  return (
    <div>
      <h1 className={LoginCSS.title}>Naturedex</h1>
      <LoginForm />
    </div>
  );
};

export default Login;
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginFormCSS from './LoginForm.module.css';
import { UserContext } from '../context/UserContext';

const LoginForm = () => {
  const { login, user } = useContext(UserContext);
  // States
	const [userData, setUserData] = useState({email: '', password: ''});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(userData.email)
      const res = await login(userData.email, userData.password);

      if (res.message === "Inicio de sesión exitoso") {
        navigate('/my_entries');
      } else {
        // Manejar error de inicio de sesión
        alert(res.message);
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Error al iniciar sesión');
    }
  };

  return (
    <div className={LoginFormCSS.loginContainer}>
      <h1>LOGIN</h1>
      <form className={LoginFormCSS.loginForm} onSubmit={handleSubmit}>
        <div className={LoginFormCSS.formGroup}>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="E-mail"
            className={LoginFormCSS.input}
            value={userData.email}
            onChange={(e) => setUserData({...userData, email: e.target.value})}
          />
        </div>
        <div className={LoginFormCSS.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="*******"
            className={LoginFormCSS.input}
            value={userData.password}
            onChange={(e) => setUserData({...userData, password: e.target.value})}
          />
        </div>
        <button type="submit" className={LoginFormCSS.loginButton}>
          Log in
        </button>
      </form>
      <p className={LoginFormCSS.signupMessage}>
        You do not have an account yet? <Link to="/register" className={LoginFormCSS.signupLink}>Sign up</Link>
      </p>
    </div>
  );
};

export default LoginForm;

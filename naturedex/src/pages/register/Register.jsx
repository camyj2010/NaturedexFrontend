import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import RegisterCSS from './Register.module.css'
import { registerRequest } from '../../functions/register';
import Swal from 'sweetalert2';

export default function Register() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	const handleNameChange = (event) => {
		setName(event.target.value);
	}

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	}

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	}

	const handleSubmit = async (event) => {
		event.preventDefault();
		console.log('entreeee')
		// Call the registerRequest function from the functions folder
		const res = await registerRequest(name, email, password);
		console.log(res)
		if (res.status === 201) {
			console.log('redirectame')
			navigate('/login')
		}
		else {
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Algo salio mal, intenta de nuevo",
			});
		}
	}

	return (
		<div className={RegisterCSS.principalContainer}>
			<h1 className={RegisterCSS.title}>Naturedex</h1>
			<div className={RegisterCSS.registerForm}>
				<h2 className={RegisterCSS.formTitle}>Registro</h2>
				<form className={RegisterCSS.insideForm} onSubmit={handleSubmit}>
					<div className={RegisterCSS.inputContainer}>
						<label className={RegisterCSS.myLabel} htmlFor="name">
							Name
						</label>
						<input
							type="text"
							id="name"
							name="name"
							value={name}
							onChange={handleNameChange}
							required />
					</div>
					<div className={RegisterCSS.inputContainer}>
						<label className={RegisterCSS.myLabel} htmlFor="email">
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							value={email}
							onChange={handleEmailChange}
							required
						/>
					</div>
					<div className={RegisterCSS.inputContainer}>
						<label className={RegisterCSS.myLabel} htmlFor="password">
							Password
						</label>
						<input
							type="password"
							id="password"
							name="password"
							value={password}
							onChange={handlePasswordChange}
							required
						/>
					</div>
					<button className={RegisterCSS.registerButton} type="submit">Registrate</button>
				</form>
				<p className={RegisterCSS.signinMessage}>
        You already have an account? <Link to="/login" className={RegisterCSS.signinLink}>Sign in</Link>
      </p>

			</div>
		</div>
	)
}

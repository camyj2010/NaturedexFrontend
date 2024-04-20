import React, { useState } from 'react'
import RegisterCSS from './Register.module.css'

export default function Register() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleNameChange = (event) => {
		setName(event.target.value);
	}

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	}

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		const user = {
			name: name,
			email: email,
			password: password
		}
		console.log(user);
	}

	return (
		<div className={RegisterCSS.principalContainer}>
			<h1 className={RegisterCSS.title}>Naturedex</h1>
			<div className={RegisterCSS.registerForm}>
				<h2 className={RegisterCSS.formTitle}>Registro</h2>
				<form className={RegisterCSS.insideForm} onSubmit={handleSubmit}>
					<div className={RegisterCSS.inputContainer}>
						<label htmlFor="name">
							Nombre
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
						<label htmlFor="email">
							Correo
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
						<label htmlFor="password">
							Contraseña
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
			</div>
		</div>
	)
}

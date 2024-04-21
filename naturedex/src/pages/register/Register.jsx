import React, { useState } from 'react'
import { redirect } from 'react-router-dom';
import RegisterCSS from './Register.module.css'
import { registerRequest } from '../../functions/register';
import Swal from 'sweetalert2';

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

	const handleSubmit = async (event) => {
		event.preventDefault();
		// Call the registerRequest function from the functions folder
		const res = await registerRequest(name, email, password);
		if (res.status === 201) {
			return redirect('/login')
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

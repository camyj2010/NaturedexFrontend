import {createContext, useState} from 'react';
import {loginRequest, sendImageRequest} from '../functions/requests';

export const initialUserState = {
	email: '',
    record: [],
    username: '',
	id: ''
};

export const UserContext = createContext({});
const {Provider} = UserContext;

export const UserProvider = ({children}) => {
	const [user, setUser] = useState(initialUserState);

	// checks if the user is authenticated or not
	const isUserAuthenticated = () => {
		if (!user.username) {
			return false;
		} else {
			return true;
		}
	};

	const login = async (email, password) => {
		// Some backend functions
		const {data} = await loginRequest(email, password);
        
        console.log(data)

		if (data.message === "Inicio de sesión exitoso") {
			const userData = {
				email: data.email,
				record: data.record,
				username: data.username,
				id: data._id
			};
			setUser(userData);
			localStorage.setItem('user', JSON.stringify(data.user));
			return data;
		} else {
			return data;
		}

		// setUser({...initialUserState, email, password});
	};

	const sendImage = async (id, imageUrl) => {
		const res = await sendImageRequest(id,imageUrl);
		console.log(res)
		if (res.message === 'Enlace agregado exitosamente al usuario') {
			return res
		} else {
			return res
		}
	}

	const initiateUser = async (initialUser) => {
		localStorage.setItem('user', JSON.stringify(initialUser));
		setUser(initialUser);
		return;
	};

	const logout = () => {
		localStorage.removeItem('user');
		setUser(initialUserState);
	};

	return (
		<Provider
			value={{
				user,
				initiateUser,
				isUserAuthenticated,
				sendImage,
				logout,
				login,
			}}
		>
			{children}
		</Provider>
	);
};
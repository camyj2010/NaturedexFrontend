import {createContext, useState} from 'react';
import {loginRequest} from '../functions/requests';

export const initialUserState = {
	email: '',
	password: '',
    record: [],
    username: ''
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
			setUser(data.user);
			localStorage.setItem('user', JSON.stringify(data.user));
			return data;
		} else {
			return data;
		}

		// setUser({...initialUserState, email, password});
	};

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
				logout,
				login,
			}}
		>
			{children}
		</Provider>
	);
};
import axios from 'axios';
const url = process.env.REACT_APP_BACKEND_URL;

// Function to register a new user
export const registerRequest = async (username, email, password) => {
	try {
		const response = await axios.post(`${url}/register`, {
			username,
			email,
			password
		});
		return response;
	} catch (error) {
		return error.response;
	}
}

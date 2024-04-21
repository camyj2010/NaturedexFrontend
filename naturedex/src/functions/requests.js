import axios from 'axios';
const API = process.env.REACT_APP_BACKEND_URL;

// POST REQUESTS
export const loginRequest = async (email, password) => {
	try {
        console.log('Voy a hacer la peticion')
		const res = await axios.post(`${API}/login`, {email, password});
		// const res = await axios.get(`${API}/admin_view/`);
        console.log('Pude hacer la peticion')
		return res;
	} catch (err) {
        console.log('C murio')
		throw err;
	}
};

export const fetchUser = async (id) => {
	try {
		const res = await axios.get(`${API}/one/${id}`);
		return res;
	} catch (err) {
		throw err;
	}
};
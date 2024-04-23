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

export const uploadImage = async (imageData) => {
	try { 
        const response = await axios.post('https://api.cloudinary.com/v1_1/proyectogca/image/upload', imageData);
		return response;
    } catch (error) {
      console.error('Error uploading image: ', error);
	  throw error;
    }
};

export const sendImageRequest = async (id, imageUrl) => {
	try {
		const response = await axios.post(`${API}/picture`, {id: id, link: imageUrl});
		return response;
	} catch (error) {
		console.error('Error uploading image to backend: ', error);
		throw error
	}
};

// GET REQUESTS
export const fetchUser = async (id) => {
	try {
		const res = await axios.get(`${API}/one/${id}`);
		return res;
	} catch (err) {
		throw err;
	}
};

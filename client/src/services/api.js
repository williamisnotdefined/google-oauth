import axios from 'axios';

import { getToken, deleteToken } from '../services/auth';

const Authorization = `Bearer ${getToken()}`;

const api = axios.create({
	baseURL: "http://localhost:8080/",
	headers: { Authorization },
});

api.interceptors.response.use(response => {
	return response.data;
}, error => {
	if (error.response.status === 401) {
		deleteToken();
		window.location.pathname = "/login";
	}
})

export default api;

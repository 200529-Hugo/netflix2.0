import axios from 'axios';

//sets the baseURL for the API
const instance = axios.create({
	baseURL: 'https://api.themoviedb.org/3'
});

export default instance;
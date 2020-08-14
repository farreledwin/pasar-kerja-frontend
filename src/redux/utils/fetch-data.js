import axios from 'axios';

const getFetchInstance = () =>
	axios.create({
		baseURL: process.env.REACT_APP_DEFAULT_API,
		timeout: 15000
	});

export default getFetchInstance;

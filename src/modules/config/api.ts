import axios from 'axios';

const pexelApi = axios.create({
    baseURL: process.env.PEXELS_URI,
    headers: {
        Authorization: process.env.PEXEL_API_TOKEN,
    },
});

export default pexelApi;

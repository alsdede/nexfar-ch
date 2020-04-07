import axios from 'axios';

const api = axios.create({
    baseURL: 'http://test.cfarma.cc/api/',
});

export default api;

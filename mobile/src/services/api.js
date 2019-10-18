import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.1.3:3333', //SEMPRE conferir com o IP expo e adicionar http e porta 3333
});

export default api;
import axios from 'axios';

// URL -> Definida para acessar a api;
const api = axios.create({
  baseURL: 'URL',
});

export default api;

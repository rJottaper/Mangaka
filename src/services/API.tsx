import axios from 'axios';

const API = axios.create({
  baseURL: 'https://api.consumet.org/manga/'
});

export default API;
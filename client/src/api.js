// src/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:6001', // Your backend port
});

export default API;

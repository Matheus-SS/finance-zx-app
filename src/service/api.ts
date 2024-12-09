import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:42069/v1/api',
  withCredentials: true
});
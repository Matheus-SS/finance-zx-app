import axios from 'axios';
import useAuthStore from '../hooks/useAuthStore';

export const api = axios.create({
  baseURL: 'http://localhost:42069/v1/api',
});

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//https://api-finance.koyeb.app/v1/api
/* eslint-disable no-param-reassign */
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://173.212.214.70:3001/auth/',
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Baerer ${localStorage.getItem('token')}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;

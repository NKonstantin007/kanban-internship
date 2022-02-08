import axios from 'axios';
import { RefreshTokenResponse } from '../../types/auth/auth';

const api = axios.create({
  withCredentials: true,
  baseURL: 'http://173.212.214.70:3001',
});

api.interceptors.request.use((config) => {
  config.headers?.autorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response && error.response.status === 401) {
      const res = await axios.post<RefreshTokenResponse>(
        'http://173.212.214.70:3001/auth/refresh',
        { withCredentials: true },
      );
      localStorage.setItem('token', res.data.token);
      return api.request(originalRequest);
    }
    return Promise.reject(error);
  },
);

export default api;

import axios from 'axios';
import { refreshToken as refreshTokenService } from '../auth/authServices';

const axiosInstance = axios.create({
  baseURL: 'http://173.212.214.70:3001/auth/',
});

axiosInstance.interceptors.request.use(
  (config) => {
    return {
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Baerer ${localStorage.getItem('token')}`,
      },
    };
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    if (!axios.isAxiosError(error)) {
      return Promise.reject(error);
    }
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken || error.response?.status === 401) {
      return Promise.reject(error);
    }
    const res = await refreshTokenService({ refreshToken });
    localStorage.setItem('token', res.token);
    localStorage.setItem('refreshToken', res.refreshToken);
    return axiosInstance(error.config);
  },
);

export default axiosInstance;

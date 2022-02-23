import axios from 'axios';

export const LOGIN_URL = 'api/auth/login';
export const REGISTER_URL = 'api/auth/register';
export const REQUEST_PASSWORD_URL = 'api/auth/forgot-password';

export const login = (email: string, password: string) => {
  return axios.post(LOGIN_URL, { email, password });
};

export const register = (email: string, password: string) => {
  return axios.post(REGISTER_URL, { email, password });
};

export const requestPassword = (email: string) => {
  return axios.post(REQUEST_PASSWORD_URL, { email });
};

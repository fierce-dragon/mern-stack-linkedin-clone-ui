import { AxiosStatic } from 'axios';
import { TStore } from 'store';

const setupAxios = (axios: AxiosStatic, store: TStore) => {
  axios.interceptors.request.use(
    config => {
      const {
        auth: { authToken },
      } = store.getState();

      if (authToken) {
        config.headers.Authorization = `Bearer ${authToken}`;
      }

      return config;
    },
    err => Promise.reject(err),
  );
};

export default setupAxios;

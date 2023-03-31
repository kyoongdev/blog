import axios, { AxiosError } from 'axios';

import { API_URL } from 'config';
import { clearTokens } from 'utils';

export const isAxiosError = <E>(err: unknown | AxiosError<E>): err is AxiosError<E> => {
  return axios.isAxiosError(err);
};

const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 5_000,
});

apiClient.interceptors.request.use(async (config) => {
  return config;
});

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    if (isAxiosError<{ statusCode: number; message: string }>(err)) {
      // console.error(err);
      // if (err.response?. === 401) {
      //   clearTokens();
      // }
    }

    return Promise.reject(err);
  },
);

export default apiClient;

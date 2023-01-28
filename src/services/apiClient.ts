import axios, { AxiosError } from 'axios';

import { API_URL } from 'config';

export const isAxiosError = <E>(err: unknown | AxiosError<E>): err is AxiosError<E> => {
  return axios.isAxiosError(err);
};

const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 5_000,
});

export default apiClient;

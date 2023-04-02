import { LoginReq, RegisterReq, TokenRes } from './type';

import apiClient from 'services/apiClient';

export const loginApi = (body: LoginReq) => {
  return apiClient.post<TokenRes>('/auth/login', body);
};

export const registerApi = (body: RegisterReq) => {
  return apiClient.post<TokenRes>('/auth/register', body);
};

import { UserReq } from './type';

import apiClient from 'services/apiClient';

export const getMeApi = () => {
  return apiClient.get<UserReq>('/users/me');
};

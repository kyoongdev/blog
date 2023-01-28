import { IUploadFileReq, IUploadFileRes } from './type';

import apiClient from 'services/apiClient';

export const uploadFile = (body: IUploadFileReq) =>
  apiClient.post<IUploadFileRes>('file', {
    body,
    headers: { 'Content-Type': 'multipart/form-data' },
  });

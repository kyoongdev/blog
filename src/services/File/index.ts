import { UploadFileBody, UploadFileResponse } from './type';

import apiClient from 'services/apiClient';

export const uploadFile = async (props: UploadFileBody) => {
  const body = new FormData();
  body.append('image', props.file);
  const result = await apiClient.post<UploadFileResponse>('/file/image', body);
  return result.data.url;
};

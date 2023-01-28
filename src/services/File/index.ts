import { IUploadFileReq, IUploadFileRes } from './type';

import apiClient from 'services/apiClient';

export const uploadFile = async (props: IUploadFileReq) => {
  const body = new FormData();
  body.append('image', props.file);
  const result = await apiClient.post<IUploadFileRes>('/file/image', body);
  return result.data.url;
};

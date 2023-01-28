import { ICreateTagReq, IGetTagsRes } from './type';

import apiClient from 'services/apiClient';
import { IResponseWithId } from 'services/type';

export const getTags = () => apiClient.get<IGetTagsRes>('tags');
export const createTags = (body: ICreateTagReq) =>
  apiClient.post<IResponseWithId>('tags', { body });
export const deleteTag = (id: string) => apiClient.delete(`tags/${id}`);

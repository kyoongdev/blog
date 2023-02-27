import { CreateTagBody, GetTagsResponse } from './type';

import apiClient from 'services/apiClient';
import { ResponseWithId } from 'services/type';

export const getTags = () => apiClient.get<GetTagsResponse>('tags');
export const createTags = (body: CreateTagBody) => apiClient.post<ResponseWithId>('tags', body);
export const deleteTag = (id: string) => apiClient.delete(`tags/${id}`);

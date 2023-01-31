import { ICreatePostReq, IGetPostRes, IGetPostsQuery, IGetPostsRes, IUpdatePostReq } from './type';

import apiClient from 'services/apiClient';
import { IResponseWithId, PagingRes } from 'services/type';

export const getPosts = (params: IGetPostsQuery) => {
  console.log(params);
  return apiClient.get<PagingRes<IGetPostsRes>>('posts', { params });
};

export const getPost = (id: string) => apiClient.get<IGetPostRes>(`posts/${id}/detail`);

export const createPost = (body: ICreatePostReq) => apiClient.post<IResponseWithId>('posts', body);

export const updatePost = (id: string, body: IUpdatePostReq) =>
  apiClient.patch(`posts/${id}`, body);

export const deletePost = (id: string) => apiClient.delete(`posts/${id}`);

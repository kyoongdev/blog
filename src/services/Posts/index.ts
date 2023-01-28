import { ICreatePostReq, IGetPostRes, IGetPostsQuery, IGetPostsRes, IUpdatePostReq } from './type';

import apiClient from 'services/apiClient';
import { IResponseWithId } from 'services/type';

export const getPosts = (params: IGetPostsQuery) =>
  apiClient.get<IGetPostsRes>('posts', { params });

export const getPost = (id: string) => apiClient.get<IGetPostRes>(`posts/${id}`);

export const createPost = (body: ICreatePostReq) => apiClient.post<IResponseWithId>('posts', body);

export const updatePost = (id: string, body: IUpdatePostReq) =>
  apiClient.patch(`posts/${id}`, body);

export const deletePost = (id: string) => apiClient.delete(`posts/${id}`);

import { ICreatePostReq, IGetPostRes, IGetPostsQuery, IGetPostsRes, IUpdatePostReq } from './type';

import apiClient from 'services/apiClient';
import { IResponseWithId } from 'services/type';

export const getPosts = async (params: IGetPostsQuery) =>
  apiClient.get<IGetPostsRes>('posts', { params });

export const getPost = async (id: string) => apiClient.get<IGetPostRes>(`posts/${id}`);

export const createPost = async (body: ICreatePostReq) =>
  apiClient.post<IResponseWithId>('posts', { body });

export const updatePost = async (id: string, body: IUpdatePostReq) =>
  apiClient.patch(`posts/${id}`, { body });

export const deletePost = async (id: string) => apiClient.delete(`posts/${id}`);

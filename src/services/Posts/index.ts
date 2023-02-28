import {
  CreatePostBody,
  GetPostResponse,
  GetPostsParams,
  GetPostsResponse,
  UpdatePostBody,
} from './type';

import apiClient from 'services/apiClient';
import { ResponseWithId, PagingRes } from 'services/type';

export const getPosts = (params: GetPostsParams) => {
  return apiClient.get<PagingRes<GetPostsResponse>>('posts', { params });
};

export const getPost = (id: string) => apiClient.get<GetPostResponse>(`posts/${id}/detail`);

export const createPost = (body: CreatePostBody) => apiClient.post<ResponseWithId>('posts', body);

export const updatePost = (id: string, body: UpdatePostBody) =>
  apiClient.patch(`posts/${id}`, body);

export const deletePost = (id: string) => apiClient.delete(`posts/${id}`);

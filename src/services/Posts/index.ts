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
export const getPostSSR = async (id: string) => {
  const response = await fetch(`posts/${id}/detail`);

  const data = (await response.json()) as GetPostResponse;
  return data;
};
export const increaseViewCountApi = (id: string) =>
  apiClient.post<GetPostResponse>(`posts/${id}/viewCount`, undefined, {
    withCredentials: true,
  });

export const createPost = (body: CreatePostBody) => apiClient.post<ResponseWithId>('posts', body);

export const updatePost = (id: string, body: UpdatePostBody) =>
  apiClient.patch(`posts/${id}`, body);

export const deletePost = (id: string) => apiClient.delete(`posts/${id}`);

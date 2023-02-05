import { PagingQuery } from 'services/type';

export interface IGetPostsRes {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  createdAt: Date;
  tags: Array<string>;
}

export interface IGetPostRes extends IGetPostsRes {
  content: string;
  keywords: Array<string>;
  updatedAt: Date;
}

export interface IGetPostsQuery extends PagingQuery {
  tags?: string[];
}

export interface CreatePostReq extends Omit<IGetPostRes, 'id' | 'createdAt' | 'updatedAt'> {}

export interface IUpdatePostReq extends Partial<CreatePostReq> {}

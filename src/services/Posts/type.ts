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
  updatedAt: Date;
}

export interface IGetPostsQuery extends PagingQuery {
  tags?: string[];
}

export interface ICreatePostReq extends Omit<IGetPostRes, 'id' | 'createdAt' | 'updatedAt'> {}

export interface IUpdatePostReq extends Partial<ICreatePostReq> {}

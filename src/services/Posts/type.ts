import { PagingQuery } from 'services/type';

export interface GetPostsResponse {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  viewCount: number;
  createdAt: Date;
  tags: Array<string>;
}

export interface GetPostResponse extends GetPostsResponse {
  content: string;
  keywords: Array<string>;
  updatedAt: Date;
}

export interface GetPostsParams extends PagingQuery {
  tags?: string[];
}

export interface CreatePostBody
  extends Omit<GetPostResponse, 'id' | 'createdAt' | 'updatedAt' | 'viewCount'> {}

export interface UpdatePostBody extends Partial<CreatePostBody> {}

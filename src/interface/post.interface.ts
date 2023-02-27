import { CreatePostBody } from 'services/Posts/type';

export interface Form extends Omit<CreatePostBody, 'thumbnail' | 'tags' | 'viewCount'> {}

export interface Keywords {
  name: string;
  width: number;
}

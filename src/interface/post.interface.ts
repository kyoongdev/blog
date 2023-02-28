import type { FormArray } from './keywords.interface';

import type { CreatePostBody } from 'services/Posts/type';
import type { TagsResponse } from 'services/Tags/type';

export interface Form
  extends Omit<CreatePostBody, 'thumbnail' | 'tags' | 'viewCount' | 'keywords'> {
  keywords: FormArray[];
  tags: TagsResponse[];
}

export interface Keywords {
  name: string;
  width: number;
}

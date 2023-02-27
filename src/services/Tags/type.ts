export interface TagsResponse {
  id: string;
  name: string;
}

export interface GetTagsResponse extends Array<TagsResponse> {}

export interface CreateTagBody {
  name: string;
}

export interface PagingQuery {
  page: number;
  limit: number;
}

export interface Paging {
  total: number;
  page: number;
  limit: number;
  skip: number;
  hasPrev: boolean;
  hasNext: boolean;
}

export interface PagingRes<T> {
  data: T[];
  paging: Paging;
}

export interface IResponseWithId {
  id: string;
}

export interface ITags {
  id: string;
  name: string;
}

export interface IGetTagsRes extends Array<ITags> {}

export interface ICreateTagReq {
  name: string;
}

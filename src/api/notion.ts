import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';
import axios from 'axios';

export const getDatabases = () => {
  return axios.get<QueryDatabaseResponse>('/api/notion');
};

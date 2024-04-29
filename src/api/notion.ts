import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';
import axios from 'axios';

import { fetchClient } from './client';

export const getClientDatabases = () => {
  return axios.get<QueryDatabaseResponse>('/api/notion');
};

export const getServerDatabases = async () => {
  const data = await fetchClient<QueryDatabaseResponse>('/api/notion', {
    revalidate: 60 * 60 * 24,
  });
  return data;
};

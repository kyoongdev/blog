import { Client } from '@notionhq/client';

import { NOTION_SECRET } from 'config';

export const notionDatabase = new Client({ auth: NOTION_SECRET });

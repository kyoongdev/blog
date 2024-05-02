import { Client } from '@notionhq/client';
import { NotionAPI } from 'notion-client';

import { NOTION_SECRET } from 'config';

export const notionDatabase = new Client({ auth: NOTION_SECRET });

export const notion = new NotionAPI();

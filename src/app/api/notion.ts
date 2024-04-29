import type { NextApiRequest, NextApiResponse } from 'next';

import { notionDatabase } from 'common/notion';

export default async function notionHandler(req: NextApiRequest, res: NextApiResponse) {
  const notion = await notionDatabase.databases.query({
    database_id: 'e02ff0921682498b867276c5b99dfcb6',
    ...req.query,
  });

  res.status(200).json({ data: notion });
}

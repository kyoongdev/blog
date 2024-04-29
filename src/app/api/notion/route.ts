import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

import { notionDatabase } from 'common/notion';

export async function GET(req: NextApiRequest) {
  const notion = await notionDatabase.databases.query({
    database_id: 'e02ff0921682498b867276c5b99dfcb6',
    ...req.query,
  });

  return NextResponse.json(notion);
}

import type { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';

import { notionDatabase } from 'common/notion';

export async function GET(req: NextApiRequest) {
  const notion = await notionDatabase.databases.query({
    database_id: 'b8da1d8f8acb499e96f0b17b861a8773',
    ...req.query,
  });

  return NextResponse.json(notion);
}

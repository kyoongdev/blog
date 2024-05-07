import { Suspense } from 'react';

import { notion, notionDatabase } from 'common/notion';
import Notion from 'container/Blog/Detail/Notion';

export default async function BlogDetailPage({ params }: { params: { pageId: string } }) {
  const recordMap = await notion.getPage(params.pageId);
  const page = await notionDatabase.pages.retrieve({
    page_id: params.pageId,
  });

  return (
    <Suspense>
      <Notion recordMap={recordMap} page={page} />
    </Suspense>
  );
}

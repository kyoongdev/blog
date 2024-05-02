import { Suspense } from 'react';

import { notion } from 'common/notion';
import Notion from 'container/Blog/Detail/Notion';

export default async function BlogDetailPage({ params }: { params: { pageId: string } }) {
  try {
    const recordMap = await notion.getPage(params.pageId);

    return (
      <Suspense>
        <Notion recordMap={recordMap} />
      </Suspense>
    );
  } catch (err) {
    console.log(err);
  }
}

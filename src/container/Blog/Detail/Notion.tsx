'use client';

import { GetPageResponse } from '@notionhq/client/build/src/api-endpoints';
import dynamic from 'next/dynamic';
import { NotionRenderer } from 'react-notion-x';

import styles from './notion.module.scss';

import { Tags } from 'components';

import 'react-notion-x/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'katex/dist/katex.min.css';

interface Props {
  recordMap: any;
  page: any;
}

const Notion: React.FC<Props> = ({ recordMap, page }) => {
  const Code = dynamic(() => import('react-notion-x/build/third-party/code').then((m) => m.Code));
  const Collection = dynamic(() =>
    import('react-notion-x/build/third-party/collection').then((m) => m.Collection),
  );
  const Equation = dynamic(() =>
    import('react-notion-x/build/third-party/equation').then((m) => m.Equation),
  );
  const Pdf = dynamic(() => import('react-notion-x/build/third-party/pdf').then((m) => m.Pdf), {
    ssr: false,
  });
  const Modal = dynamic(
    () => import('react-notion-x/build/third-party/modal').then((m) => m.Modal),
    {
      ssr: false,
    },
  );
  return (
    <section>
      <header className={styles.header}>
        <h1>{page.properties?.Name?.title[0].text.content}</h1>
      </header>
      <NotionRenderer
        recordMap={recordMap}
        components={{
          Code,
          Collection,
          Equation,
          Modal,
          Pdf,
        }}
      />
    </section>
  );
};

export default Notion;

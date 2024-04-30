import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from './content.module.scss';

import { Tags } from 'components';
import type { DatabaseCover, DatabaseProperty } from 'interface/notion.interface';

interface Props {
  data: QueryDatabaseResponse;
}

const Content: React.FC<Props> = ({ data }) => {
  return (
    <section className={styles.wrapper}>
      <ul className={styles.contents}>
        {data.results.map((result: any) => {
          const property = result.properties as DatabaseProperty;
          const cover = result.cover as DatabaseCover;
          return (
            <>
              <Link href={`/blog/${result.id}`}>
                <li id={result.id} className={styles.content}>
                  <Image src={cover.external.url} alt='커버 이미지' width={160} height={200} />
                  <div>
                    <div className={styles.header}>
                      <h3>{property.Name.title[0].text.content}</h3>
                      <Tags tags={property.Tags.multi_select.map((tag) => tag.name)} />
                    </div>
                    <p className={styles.description}>{property.설명.rich_text[0].plain_text}</p>
                  </div>
                </li>
              </Link>
              <hr className={styles.divider} />
            </>
          );
        })}
      </ul>
    </section>
  );
};
export default Content;

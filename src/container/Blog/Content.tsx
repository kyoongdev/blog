import {
  QueryDatabaseResponse,
  PageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';
import React from 'react';

import styles from './content.module.scss';

interface Props {
  data: QueryDatabaseResponse;
}

const Content: React.FC<Props> = ({ data }) => {
  return (
    <section className={styles.wrapper}>
      <ul>
        {data.results.map((result: any) => (
          <li id={result.id}>{result.properties['이름']['title'][0].text.content}</li>
        ))}
      </ul>
    </section>
  );
};
export default Content;

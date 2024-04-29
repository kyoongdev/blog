import styles from './blogPage.module.scss';
import Content from './Content';

import { getServerDatabases } from 'api/notion';

export default async function BlogPage() {
  const data = await getServerDatabases();

  return (
    <>
      <section className={styles.title}>
        <h1>기술 블로그</h1>
      </section>
      <hr className={styles.divider} />
      <Content data={data} />
    </>
  );
}

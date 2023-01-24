import dynamic from 'next/dynamic';
import React from 'react';

import styles from './post.module.scss';

import '@uiw/react-md-editor/markdown-editor.css';
import { Tags } from 'components';
import { TAGS } from 'utils';

const Editor = dynamic(() => import('@uiw/react-md-editor'), {
  ssr: false,
});

const PostPage: React.FC = () => {
  const [value, setValue] = React.useState('');

  return (
    <section className={styles.wrapper}>
      <input className={styles.title} type='input' placeholder='제목을 입력해주세요.' />
      <hr />
      <textarea className={styles.description} placeholder='설명을 입력해주세요.' />
      <hr />
      <Tags className={styles.tags} tags={TAGS} isSecondary />
      <Editor className={styles.body} value={value} onChange={(e) => setValue(e!)} />
    </section>
  );
};

export default PostPage;

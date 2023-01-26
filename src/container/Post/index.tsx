import cx from 'classnames';
import dynamic from 'next/dynamic';
import React from 'react';

import styles from './post.module.scss';

import '@uiw/react-md-editor/markdown-editor.css';
import { Tags } from 'components';
import Markdown from 'components/Markdown';
import { TAGS } from 'utils';

const Editor = dynamic(() => import('@uiw/react-md-editor'), {
  ssr: false,
});

const PostPage: React.FC = () => {
  const [inView, setInView] = React.useState<boolean>(true);
  const [value, setValue] = React.useState<string>('');

  const onFocus = () => {
    setInView(false);
  };
  const onBlur = () => {
    setInView(true);
  };

  return (
    <section className={styles.wrapper}>
      <input className={styles.title} type='input' placeholder='제목을 입력해주세요.' />
      <hr />
      <textarea className={styles.description} placeholder='설명을 입력해주세요.' />
      <hr />
      <div className={styles.tagWrapper}>
        <h2>Tags</h2>
        <Tags className={styles.tags} tags={TAGS} isSecondary />
      </div>
      <section className={styles.edit}>
        <p className={cx(styles.placeholder, { [styles.view]: value.length === 0 && inView })}>
          내용을 입력해주세요.
        </p>
        <Editor
          className={styles.body}
          preview={'edit'}
          value={value}
          onChange={(e) => setValue(e!)}
          hideToolbar={true}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <Markdown className={styles.markdown} content={value} />
      </section>
    </section>
  );
};

export default PostPage;

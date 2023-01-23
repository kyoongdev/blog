import React from 'react';
import { useRecoilState } from 'recoil';

import styles from './categories.module.scss';
import { tags } from '../state';

import { Tags } from 'components';

const TAGS = ['프런트엔드', '백엔드', '인프라', '라이프스타일', '인간관계'];

const Categorires: React.FC = () => {
  const [selectedTags, setSelectedTags] = useRecoilState(tags);

  const onClick = React.useCallback((tag: string) => {
    return () => {
      setSelectedTags((prev) => {
        if (prev.indexOf(tag) === -1) return [...prev, tag];
        return prev.filter((t) => t !== tag);
      });
    };
  }, []);
  return (
    <article className={styles.container}>
      <h2>Topics</h2>
      <Tags
        className={styles.categories}
        tags={TAGS}
        selectedTags={selectedTags}
        isSecondary
        onClick={onClick}
      />
    </article>
  );
};

export default Categorires;

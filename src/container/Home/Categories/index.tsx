import { useAtom } from 'jotai';
import React from 'react';

import styles from './categories.module.scss';
import { tagsState } from '../state';

import { Tags } from 'components';
import { GetTagsResponse, TagsResponse } from 'services/Tags/type';

interface Props {
  data: GetTagsResponse;
}

const Categorires: React.FC<Props> = ({ data }) => {
  const [selectedTags, setSelectedTags] = useAtom(tagsState);

  const onClick = React.useCallback((tag: TagsResponse) => {
    return () => {
      setSelectedTags((prev) => {
        if (prev.indexOf(tag.id) === -1) return [...prev, tag.id];
        return prev.filter((t) => t !== tag.id);
      });
    };
  }, []);
  return (
    <article className={styles.container}>
      <h2>Topics</h2>
      <Tags
        className={styles.categories}
        tags={data}
        selectedTags={selectedTags}
        isSecondary
        onClick={onClick}
      />
    </article>
  );
};

export default Categorires;

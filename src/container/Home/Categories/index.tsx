import { useAtom } from 'jotai';
import React from 'react';
import { useQuery } from 'react-query';

import styles from './categories.module.scss';
import { tagsState } from '../state';

import { Tags } from 'components';
import { getTags } from 'services/Tags';
import { GetTagsResponse, TagsResponse } from 'services/Tags/type';

const Categorires: React.FC = () => {
  const [selectedTags, setSelectedTags] = useAtom(tagsState);

  const { data: tag } = useQuery('getTags', () => getTags().then((res) => res.data));

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
        tags={tag ?? []}
        selectedTags={selectedTags}
        isSecondary
        onClick={onClick}
      />
    </article>
  );
};

export default Categorires;

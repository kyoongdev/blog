import React from 'react';
import { useRecoilState } from 'recoil';

import styles from './categories.module.scss';
import { tags } from '../state';

import { Tags } from 'components';
import { IGetTagsRes, ITags } from 'services/Tags/type';
import { TAGS } from 'utils';

interface Props {
  data: IGetTagsRes;
}

const Categorires: React.FC<Props> = ({ data }) => {
  const [selectedTags, setSelectedTags] = useRecoilState(tags);

  const onClick = React.useCallback((tag: ITags) => {
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

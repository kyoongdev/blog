import cx from 'clsx';
import React from 'react';

import styles from './tags.module.scss';

import { GetTagsResponse, TagsResponse } from 'services/Tags/type';

interface Props {
  className?: string;
  isSecondary?: boolean;
  isDark?: boolean;
  tags: GetTagsResponse | string[];
  selectedTags?: string[];
  onClick?(tag: TagsResponse): () => void;
}

const Tags: React.FC<Props> = ({ tags, className, isDark, isSecondary, selectedTags, onClick }) => {
  return (
    <ul
      className={cx(styles.tags, className, {
        [styles.isDark]: isDark,
        [styles.isSecondary]: isSecondary,
      })}
    >
      {tags.map((tag, index) => {
        const tagId = typeof tag !== 'string' ? tag.id : tag;
        const tagName = typeof tag !== 'string' ? tag.name : tag;
        return (
          <li
            className={cx({
              [styles.selected]: selectedTags && selectedTags.indexOf(tagId) !== -1,
            })}
            key={`${tag}-${index}`}
            {...(onClick && typeof tag !== 'string' && { onClick: onClick(tag) })}
          >
            {tagName}
          </li>
        );
      })}
    </ul>
  );
};

export default React.memo(Tags);

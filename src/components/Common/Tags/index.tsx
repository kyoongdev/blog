import cx from 'clsx';
import React from 'react';

import styles from './tags.module.scss';

interface Props {
  className?: string;
  isSecondary?: boolean;
  isDark?: boolean;
  tags: string[];
  selectedTags?: string[];
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
        return (
          <li
            className={cx({
              [styles.selected]: selectedTags && selectedTags.indexOf(tagId) !== -1,
            })}
            key={`${tag}-${index}`}
            {...(onClick && typeof tag !== 'string' && { onClick: onClick(tag) })}
          >
            {tag}
          </li>
        );
      })}
    </ul>
  );
};

export default React.memo(Tags);

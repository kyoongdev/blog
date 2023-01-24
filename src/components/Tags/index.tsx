import cx from 'classnames';
import React from 'react';

import styles from './tags.module.scss';

interface Props {
  className?: string;
  isSecondary?: boolean;
  isDark?: boolean;
  tags: readonly string[];
  selectedTags?: string[];
  onClick?(tag: string): () => void;
}

const Tags: React.FC<Props> = ({ tags, className, isDark, isSecondary, selectedTags, onClick }) => {
  return (
    <ul
      className={cx(styles.tags, className, {
        [styles.isDark]: isDark,
        [styles.isSecondary]: isSecondary,
      })}
    >
      {tags.map((tag, index) => (
        <li
          className={cx({
            [styles.selected]: selectedTags && selectedTags.indexOf(tag) !== -1,
          })}
          key={`${tag}-${index}`}
          onClick={onClick?.(tag)}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default React.memo(Tags);

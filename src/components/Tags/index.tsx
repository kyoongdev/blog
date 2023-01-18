import cx from 'classnames';
import React from 'react';

import styles from './tags.module.scss';

interface Props {
  className?: string;
  isSecondary?: boolean;
  isDark?: boolean;
  tags: string[];
}

const Tags: React.FC<Props> = ({ tags, className, isDark, isSecondary }) => {
  return (
    <ul
      className={cx(styles.tags, className, {
        [styles.isDark]: isDark,
        [styles.isSecondary]: isSecondary,
      })}
    >
      {tags.map((tag, index) => (
        <li key={`${tag}-${index}`}>{tag}</li>
      ))}
    </ul>
  );
};

export default Tags;

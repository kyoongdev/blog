import React from 'react';

import styles from './categories.module.scss';

import { Tags } from 'components';

const TAGS = ['프런트엔드', '백엔드', '인프라', '라이프스타일', '인간관계'];

const Categorires: React.FC = () => {
  return (
    <article className={styles.container}>
      <h2>Topics</h2>
      <Tags className={styles.categories} tags={TAGS} isSecondary />
    </article>
  );
};

export default Categorires;

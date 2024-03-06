import React from 'react';

import styles from './career.module.scss';
import { CAREERS } from './data';

import { Markdown } from 'components';

const Career: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <h2>Career</h2>
      <ul className={styles.careers}>
        {CAREERS.map((career) => (
          <li className={styles.career} id={career.title}>
            <h3 className={styles.title}>
              {career.title}
              <p>{career.job}</p>
              <p>
                {career.startAt} - {career.endAt}
              </p>
            </h3>
            <Markdown className={'project'} content={career.description} />
            {career.children}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Career;

'use client';
import { useAtomValue } from 'jotai';
import React from 'react';

import styles from './career.module.scss';
import { CAREERS } from './data';

import { Markdown } from 'components';
import { fusbleRef, humonlabRef } from 'state/project';

const Career: React.FC = () => {
  const fusebleRef = useAtomValue(fusbleRef);
  const humonRef = useAtomValue(humonlabRef);

  const onClickTitle: React.MouseEventHandler<HTMLHeadingElement> = (e) => {
    const career = e.currentTarget.dataset.career;

    if (career == 'humonlab' && humonRef) {
      humonRef.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else if (career == 'fuseble' && fusebleRef) {
      fusebleRef.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className={styles.wrapper}>
      <h2>
        Career <p>* 각 이름 클릭 시 해당 프로젝트로 이동합니다.</p>
      </h2>
      <ul className={styles.careers}>
        {CAREERS.map((career) => (
          <li className={styles.career} id={career.title}>
            <h3 className={styles.title} data-career={career.dataKey} onClick={onClickTitle}>
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

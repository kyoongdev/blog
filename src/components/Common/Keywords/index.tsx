import React from 'react';

import styles from './keywords.module.scss';

import type { FormArray } from 'interface/keywords.interface';

interface Props {
  keywords: FormArray[];
  onAddKeyword?: (keyword: FormArray) => void;
  onRemoveKeyword?: () => void;
  name?: string;
  placeholder?: string;
}

const Keywords: React.FC<Props> = ({
  keywords,
  name,
  placeholder = '키워드를 입력해주세요.',
  onAddKeyword,
  onRemoveKeyword,
}) => {
  const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    const { value: name } = e.currentTarget;
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
      e.preventDefault();
      onAddKeyword && onAddKeyword({ name });
      e.currentTarget.value = '';
    } else if (e.key === 'Backspace' && name.length === 0) {
      onRemoveKeyword && onRemoveKeyword();
    }
  };
  return (
    <div className={styles.wrapper}>
      <ul>
        {keywords.map(({ name }) => (
          <li>{name}</li>
        ))}
      </ul>
      <input name={name} placeholder={placeholder} onKeyDown={onKeyDown} />
    </div>
  );
};
export default React.memo(Keywords);

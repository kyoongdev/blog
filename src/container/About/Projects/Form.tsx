import dynamic from 'next/dynamic';
import React from 'react';
import { useFieldArray, useForm } from 'react-hook-form';

import styles from './form.module.scss';

import { ProjectForm } from 'interface/project.interface';
import { getEditor, getTextWidth } from 'utils';

import '@uiw/react-md-editor/markdown-editor.css';

const Editor = dynamic(() => import('@uiw/react-md-editor'), {
  ssr: false,
});

const Form: React.FC = () => {
  const [thumbnail, setThumbnail] = React.useState<File | null>(null);
  const { register, setValue, getValues, handleSubmit, watch, control } = useForm<ProjectForm>();
  const {
    fields: skills,
    append: appendSkills,
    remove: removeSkills,
  } = useFieldArray({
    control,
    name: 'skills',
  });
  const {
    fields: roles,
    append: appendRole,
    remove: removeRoles,
  } = useFieldArray({
    control,
    name: 'roles',
  });

  const commands = React.useMemo(() => getEditor('italic', 'bold'), []);
  const preview = thumbnail && URL.createObjectURL(thumbnail);

  const onKeywordInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    const { value: name, name: target } = e.currentTarget;
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
      e.preventDefault();
      const data = {
        name,
        width: getTextWidth(name) + 24,
      };
      target === 'roles' ? appendRole(data) : appendSkills(data);
      e.currentTarget.value = '';
    } else if (e.key === 'Backspace' && name.length === 0) {
      target === 'roles' ? removeRoles(roles.length - 1) : removeSkills(skills.length - 1);
    }
  };
  return (
    <section className={styles.wrapper}>
      <form className={styles.form}>
        <label className={styles.inputWrapper}>
          <p>제목</p>
          <input placeholder='제목을 입력해주세요.' />
        </label>
        <label className={styles.thumbnail}>
          <h2>썸네일</h2>
          <input type='file' onChange={() => {}} />
          {preview ? <img src={preview} alt='thumbnail' /> : <p>썸네일을 등록해주세요.</p>}
        </label>
        <div className={styles.tagWrapper}>
          <h2>스킬</h2>
          <div className={styles.tags}>
            <ul>
              {roles.map(({ name }) => (
                <li>{name}</li>
              ))}
            </ul>
            <input
              name='skills'
              placeholder='스킬을 입력해주세요.'
              onKeyDown={onKeywordInputKeyDown}
            />
          </div>
        </div>
        <div className={styles.tagWrapper}>
          <h2>역할</h2>
          <div className={styles.tags}>
            <ul>
              {roles.map(({ name }) => (
                <li>{name}</li>
              ))}
            </ul>
            <input
              name='roles'
              placeholder='역할을 입력해주세요.'
              onKeyDown={onKeywordInputKeyDown}
            />
          </div>
        </div>
        <label className={styles.content}>
          <p>내용</p>
          <Editor
            className={styles.body}
            preview={'edit'}
            onChange={(value) => setValue('content', value || '')}
            value={watch('content')}
            commands={commands}
          />
        </label>
      </form>
    </section>
  );
};
export default Form;

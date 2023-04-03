import cx from 'clsx';
import dynamic from 'next/dynamic';
import React from 'react';
import { useFieldArray, useForm, type SubmitHandler } from 'react-hook-form';
import { useMutation } from 'react-query';

import styles from './form.module.scss';

import { Button } from 'components';
import { ProjectForm } from 'interface/project.interface';
import { uploadFile } from 'services/File';
import { createProjectApi, updateProjectApi } from 'services/Project';
import { ProjectsResponse, UpdateProjectRequest } from 'services/Project/type';
import { getEditor, getTextWidth } from 'utils';
import { isLocal } from 'utils/local';

import '@uiw/react-md-editor/markdown-editor.css';

const Editor = dynamic(() => import('@uiw/react-md-editor'), {
  ssr: false,
});

interface Props {
  view: boolean;
  selectedProject: ProjectsResponse | null;
}

const Form: React.FC<Props> = ({ view, selectedProject }) => {
  const [thumbnail, setThumbnail] = React.useState<File | null>(null);

  const { mutateAsync: createProject } = useMutation(createProjectApi);
  const { mutateAsync: updateProject } = useMutation((body: UpdateProjectRequest) =>
    updateProjectApi('', body),
  );

  const { register, setValue, handleSubmit, watch, control, reset } = useForm<ProjectForm>();
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
  const preview = watch('thumbnail') ?? (thumbnail && URL.createObjectURL(thumbnail));

  const onSubmit: SubmitHandler<ProjectForm> = async (data) => {
    const { title, content, skills, roles, startDate, endDate } = data;
    const body = {
      title,
      content,
      skills: skills.map((skill) => skill.name),
      roles: roles.map((role) => role.name),
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      thumbnail:
        selectedProject?.thumbnail ??
        (thumbnail ? await uploadFile({ file: thumbnail }) : undefined),
    };
    if (selectedProject) {
      await updateProject(body);
    } else {
      await createProject(body);
    }
    reset();
  };

  const onAddThumbnail: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { files } = e.currentTarget;
    const file = files && files[0];
    if (!file) return;
    setThumbnail(file);
  };

  const onKeywordInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    const { value: name, name: target } = e.currentTarget;
    if (e.key === 'Enter' && !e.nativeEvent.isComposing && name.length !== 0) {
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

  React.useEffect(() => {
    if (!selectedProject) {
      reset();
      return;
    }
    setValue('title', selectedProject.title);
    setValue('content', selectedProject.content);
    setValue(
      'skills',
      selectedProject.skills.map((skill) => ({ name: skill })),
    );
    setValue(
      'roles',
      selectedProject.roles.map((role) => ({ name: role })),
    );
    setValue('startDate', selectedProject.startDate);
    setValue('endDate', selectedProject.endDate);
    setValue('thumbnail', selectedProject.thumbnail);
  }, [selectedProject]);

  if (!isLocal) return null;

  return (
    <section className={cx(styles.wrapper, { [styles.isOpen]: view })}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Button className={styles.submit}>제출</Button>
        <label className={styles.inputWrapper}>
          <p>제목</p>
          <input placeholder='제목을 입력해주세요.' {...register('title')} />
        </label>
        <label className={styles.thumbnail}>
          <h2>썸네일</h2>
          <input type='file' onChange={onAddThumbnail} />
          {preview ? <img src={preview} alt='thumbnail' /> : <p>썸네일을 등록해주세요.</p>}
        </label>
        <label className={styles.inputWrapper}>
          <p>링크</p>
          <input placeholder='링크를 입력해주세요.' {...register('link')} />
        </label>
        <div className={styles.tagWrapper}>
          <h2>스킬</h2>
          <div className={styles.tags}>
            <ul>
              {skills.map(({ name }) => (
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
        <div className={styles.datePicker}>
          <p>기간</p>
          <input placeholder='시작 기간' type='month' {...register('startDate')} />
          <input placeholder='종료 기간' type='month' {...register('endDate')} />
        </div>
        <label className={styles.content}>
          <p>내용</p>
          <Editor
            className={styles.body}
            // preview={'preview'}
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

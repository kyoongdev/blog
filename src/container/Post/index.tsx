import cx from 'classnames';
import dynamic from 'next/dynamic';
import React from 'react';
import { useForm } from 'react-hook-form';

import styles from './post.module.scss';

import '@uiw/react-md-editor/markdown-editor.css';
import { Tags, Button } from 'components';
import Markdown from 'components/Markdown';
import { uploadFile } from 'services/File';
import { ICreatePostReq } from 'services/Posts/type';
import { getEditor, TAGS } from 'utils';

const Editor = dynamic(() => import('@uiw/react-md-editor'), {
  ssr: false,
});

interface IForm extends Omit<ICreatePostReq, 'content' | 'thumbnail' | 'tags'> {}

const initForm: IForm = {
  title: '',
  description: '',
};

const PostPage: React.FC = () => {
  const [inView, setInView] = React.useState<boolean>(true);
  const [thumbnail, setThumbnail] = React.useState<File | null>(null);
  const [content, setContent] = React.useState<string>('');
  const [tags, setTags] = React.useState<string[]>([]);

  const commands = React.useMemo(() => getEditor('italic', 'bold', 'image'), []);

  const { register, handleSubmit } = useForm<IForm>({
    defaultValues: initForm,
  });

  const preview = thumbnail && URL.createObjectURL(thumbnail);

  const onFocus = () => setInView(false);
  const onBlur = () => setInView(true);

  const onClickTags = (tag: string) => () => {
    setTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
  };

  const onSubmit = handleSubmit((data) => {
    const { title, description } = data;
    const req: ICreatePostReq = {
      title,
      description,
      content,
      thumbnail: '',
      tags,
    };
  });

  const onAddThumbnail: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { files } = e.currentTarget;
    const file = files && files[0];
    if (!file) return;
    setThumbnail(file);
    uploadFile({ file }).then((url) => {
      console.log(url);
    });
  };

  return (
    <section className={styles.wrapper}>
      <form onSubmit={onSubmit}>
        <Button className={styles.submitButton} type='submit'>
          제출하기
        </Button>
        <input
          className={styles.title}
          type='input'
          placeholder='제목을 입력해주세요.'
          {...register('title')}
        />
        <hr />
        <textarea
          className={styles.description}
          placeholder='설명을 입력해주세요.'
          {...register('description')}
        />
        <hr />
        <div className={cx(styles.thumbnail, { [styles.exist]: !!thumbnail })}>
          <label>
            <h2>썸네일</h2>
            <input type='file' onChange={onAddThumbnail} />
            {preview ? <img src={preview} alt='thumbnail' /> : <p>썸네일을 등록해주세요.</p>}
          </label>
        </div>
        <div className={styles.tagWrapper}>
          <h2>Tags</h2>
          <Tags
            className={styles.tags}
            tags={TAGS}
            isSecondary
            onClick={onClickTags}
            selectedTags={tags}
          />
        </div>
        <section className={styles.edit}>
          <p
            className={cx(styles.placeholder, {
              [styles.view]: content.length === 0 && inView,
            })}
          >
            내용을 입력해주세요.
          </p>
          <Editor
            className={styles.body}
            preview={'edit'}
            onChange={(value) => setContent(value ?? '')}
            value={content}
            onFocus={onFocus}
            onBlur={onBlur}
            commands={commands}
          />
          <Markdown className={styles.markdown} content={content} />
        </section>
      </form>
    </section>
  );
};

export default PostPage;

import cx from 'classnames';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React, { CSSProperties } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';

import styles from './post.module.scss';

import '@uiw/react-md-editor/markdown-editor.css';
import { Button, Tags } from 'components';
import Markdown from 'components/Markdown';
import { uploadFile } from 'services/File';
import { createPost } from 'services/Posts';
import { ICreatePostReq } from 'services/Posts/type';
import { getTags } from 'services/Tags';
import { ITags } from 'services/Tags/type';
import { getEditor, getTextWidth } from 'utils';

const Editor = dynamic(() => import('@uiw/react-md-editor'), {
  ssr: false,
});

interface IForm extends Omit<ICreatePostReq, 'thumbnail' | 'tags'> {}
interface IKeywords {
  name: string;
  width: number;
}

const initForm: IForm = {
  title: '',
  description: '',
  content: '',
};

const PostPage: React.FC = () => {
  const router = useRouter();
  const { data: tagData } = useQuery(['getTags'], getTags);

  const { mutate: createPostApi } = useMutation(createPost, {
    onSuccess: () => {
      router.push('/');
    },
  });
  const [inView, setInView] = React.useState<boolean>(true);
  const [thumbnail, setThumbnail] = React.useState<File | null>(null);
  const [tags, setTags] = React.useState<string[]>([]);
  const [keywords, setKeywords] = React.useState<IKeywords[]>([]);

  const commands = React.useMemo(() => getEditor('italic', 'bold', 'image'), []);
  const keywordsWidth = keywords.reduce<number>((acc, cur) => (acc += cur.width), 0);

  const { register, handleSubmit, watch, setValue } = useForm<IForm>({
    defaultValues: initForm,
  });

  const preview = thumbnail && URL.createObjectURL(thumbnail);

  const onFocus = React.useCallback(() => setInView(false), []);
  const onBlur = React.useCallback(() => setInView(true), []);

  const onClickTags = React.useCallback(
    (tag: ITags) => () => {
      setTags((prev) =>
        prev.includes(tag.id) ? prev.filter((t) => t !== tag.id) : [...prev, tag.id],
      );
    },
    [],
  );

  const onKeywordInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
      const { value: name } = e.currentTarget;

      setKeywords((prev) => [...prev, { name, width: getTextWidth(name) + 24 }]);
      e.currentTarget.value = '';
    } else if (e.key === 'Backspace' && keywords.length !== 0) {
      setKeywords((prev) => prev.slice(0, prev.length - 1));
    }
  };

  const onSubmit = handleSubmit(async (data) => {
    if (!thumbnail) return;
    const thumbnailUrl = await uploadFile({ file: thumbnail });
    const req: ICreatePostReq = {
      ...data,
      thumbnail: thumbnailUrl,
      tags,
    };
    createPostApi(req);
  });

  const onAddThumbnail: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { files } = e.currentTarget;
    const file = files && files[0];
    if (!file) return;
    setThumbnail(file);
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
            tags={tagData?.data ?? []}
            isSecondary
            onClick={onClickTags}
            selectedTags={tags}
          />
        </div>
        <div className={styles.keywordWrapper}>
          <h2>Keywords</h2>
          <div
            className={styles.keywords}
            style={
              { '--count': `${keywordsWidth + (keywords.length - 1) * 4 + 4}px` } as CSSProperties
            }
          >
            <ul>
              {keywords.map(({ name }) => (
                <li>{name}</li>
              ))}
            </ul>
            <input
              name='keyword'
              placeholder='키워드를 입력해주세요.'
              onKeyDown={onKeywordInputKeyDown}
            />
          </div>
        </div>
        <section className={styles.edit}>
          <p
            className={cx(styles.placeholder, {
              [styles.view]: watch('content').length === 0 && inView,
            })}
          >
            내용을 입력해주세요.
          </p>
          <Editor
            className={styles.body}
            preview={'edit'}
            onChange={(value) => setValue('content', value || '')}
            value={watch('content')}
            onFocus={onFocus}
            onBlur={onBlur}
            commands={commands}
          />
          <Markdown className={styles.markdown} content={watch('content')} />
        </section>
      </form>
    </section>
  );
};

export default PostPage;

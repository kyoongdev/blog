import cx from 'clsx';
import { useAtomValue } from 'jotai';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React from 'react';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';

import styles from './updatePostPage.module.scss';

import { Button, Keywords, Markdown, Tags } from 'components';
import { updatePostState } from 'container/state';
import { FormArray } from 'interface/keywords.interface';
import { Form } from 'interface/post.interface';
import { uploadFile } from 'services/File';
import { createPost, getPost, updatePost } from 'services/Posts';
import { CreatePostBody, UpdatePostBody } from 'services/Posts/type';
import { getTags } from 'services/Tags';
import { TagsResponse } from 'services/Tags/type';
import { getEditor } from 'utils';

import '@uiw/react-md-editor/markdown-editor.css';

const Editor = dynamic(() => import('@uiw/react-md-editor'), {
  ssr: false,
});

const UpdatePostPage: React.FC = () => {
  const router = useRouter();

  const updatePostValue = useAtomValue(updatePostState);

  const { mutate: updatePostApi } = useMutation(
    (body: UpdatePostBody) => updatePost(updatePostValue?.id ?? '', body),
    {
      onSuccess: () => {
        router.push('/');
      },
    },
  );
  const [inView, setInView] = React.useState<boolean>(true);
  const [thumbnail, setThumbnail] = React.useState<File | null>(null);

  const { register, handleSubmit, watch, setValue, control } = useForm<Form>({
    defaultValues: {
      title: updatePostValue?.title,
      description: updatePostValue?.description,
      content: updatePostValue?.content,
      keywords: updatePostValue?.keywords.map((name) => ({ name })),
    },
  });
  const {
    fields: keywords,
    append: appendKeyword,
    remove: removeKeyword,
  } = useFieldArray<Form, any, keyof FormArray>({
    control,
    name: 'keywords',
  });
  const {
    fields: tags,
    append: appendTag,
    remove: removeTag,
  } = useFieldArray<Form, any, keyof TagsResponse>({
    control,
    name: 'tags',
    keyName: 'name',
  });

  const { data: tagData } = useQuery(['getTags', updatePostValue?.id], getTags, {
    onSuccess({ data }) {
      updatePostValue?.tags.forEach((tag) => {
        const tagIdx = data.findIndex(({ name }) => name === tag);
        if (tagIdx !== -1) {
          appendTag(data[tagIdx]);
        }
      });
    },
  });

  const commands = React.useMemo(() => getEditor('italic', 'bold', 'image'), []);
  const preview = thumbnail ? URL.createObjectURL(thumbnail) : updatePostValue?.thumbnail;

  const onFocus = React.useCallback(() => setInView(false), []);
  const onBlur = React.useCallback(() => setInView(true), []);

  const onClickTags = React.useCallback(
    (tag: TagsResponse) => () => {
      const tagIdx = tags.findIndex(({ id }) => id === tag.id);
      if (tagIdx === -1) {
        appendTag(tag);
      } else {
        removeTag(tagIdx);
      }
    },
    [tags],
  );

  const onAddKeyword = React.useCallback((keyword: FormArray) => {
    appendKeyword(keyword);
  }, []);
  const onRemoveKeyword = React.useCallback(() => {
    removeKeyword(keywords.length - 1);
  }, [keywords]);

  const onSubmit: SubmitHandler<Form> = async (data) => {
    const thumbnailUrl = thumbnail ? await uploadFile({ file: thumbnail }) : preview;
    const req: UpdatePostBody = {
      ...data,
      thumbnail: thumbnailUrl!,
      tags: data.tags.map(({ id }) => id),
      keywords: data.keywords.map(({ name }) => name),
    };
    updatePostApi(req);
  };

  const onAddThumbnail: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { files } = e.currentTarget;
    const file = files && files[0];
    if (!file) return;
    setThumbnail(file);
  };

  return (
    <section className={styles.wrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <div className={cx(styles.thumbnail, { [styles.exist]: !!preview })}>
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
            selectedTags={tags.map((tag) => tag.id)}
          />
        </div>
        <div className={styles.keywordWrapper}>
          <h2>Keywords</h2>
          <Keywords
            keywords={keywords}
            name='keywords'
            onAddKeyword={onAddKeyword}
            onRemoveKeyword={onRemoveKeyword}
          />
        </div>
        <section className={styles.edit}>
          <p
            className={cx(styles.placeholder, {
              [styles.view]: watch('content')?.length === 0 && inView,
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
export default UpdatePostPage;

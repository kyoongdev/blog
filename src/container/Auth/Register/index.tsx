import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';

import styles from './register.module.scss';

import { Button, Input } from 'components';
import { useMe } from 'hooks';
import { type ApiError, isAxiosError } from 'services';
import { registerApi } from 'services/Auth';
import { RegisterReq } from 'services/Auth/type';
import { setTokens } from 'utils';

const Register: React.FC = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<RegisterReq>();

  const { mutateAsync } = useMutation(registerApi);
  const router = useRouter();
  const { getMe } = useMe();

  const onSubmit = handleSubmit(async (data) => {
    const result = await mutateAsync(data);

    if (isAxiosError<ApiError>(result) && result.response) {
      const { statusCode, message } = result.response.data;
      if (statusCode === 409) {
        setError('userId', { message });
      } else {
        alert('오류가 발생했습니다.');
      }
    }
    setTokens(result.data);
    await getMe();
    router.replace('/');
  });

  return (
    <section className={styles.wrapper}>
      <form className={styles.form} onSubmit={onSubmit}>
        <Input
          className={styles.input}
          label='이름'
          {...register('name')}
          errorText={errors.name?.message}
        />
        <Input
          className={styles.input}
          label='아이디'
          {...register('userId')}
          errorText={errors.userId?.message}
        />
        <Input
          className={styles.input}
          label='비밀번호'
          type='password'
          {...register('password')}
          errorText={errors.password?.message}
        />
        <Button type='submit'>회원가입</Button>
      </form>
    </section>
  );
};

export default Register;

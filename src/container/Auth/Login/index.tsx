import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';

import styles from './login.module.scss';

import { Button, Input } from 'components';
import { useMe } from 'hooks';
import { type ApiError, isAxiosError } from 'services';
import { loginApi } from 'services/Auth';
import type { LoginReq } from 'services/Auth/type';
import { setTokens } from 'utils';

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginReq>({});
  const { mutateAsync } = useMutation(loginApi);
  const router = useRouter();
  const { getMe } = useMe();

  const onSubmit = handleSubmit(async (data) => {
    const result = await mutateAsync(data);

    if (isAxiosError<ApiError>(result) && result.response) {
      const { statusCode, message } = result.response.data;
      if (statusCode === 400) {
        setError('password', { message });
      } else if (statusCode === 404) {
        setError('userId', { message });
      } else {
        alert('오류가 발생했습니다.');
      }
    }

    setTokens(result.data);
    await getMe();
    router.replace('/');
  });

  const onClickRegister = () => {
    router.push('/auth/register');
  };

  return (
    <section className={styles.wrapper}>
      <form className={styles.form} onSubmit={onSubmit}>
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
        <Button type='submit'>로그인</Button>
        <p onClick={onClickRegister}>회원가입</p>
      </form>
    </section>
  );
};

export default Login;

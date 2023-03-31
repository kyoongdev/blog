import React from 'react';

import styles from './login.module.scss';

import { Input } from 'components';

const Login: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <form className={styles.form}>
        <h1>로그인</h1>
        <Input className={styles.input} label='아이디' />
        <Input className={styles.input} label='비밀번호' type='password' />
      </form>
    </section>
  );
};

export default Login;

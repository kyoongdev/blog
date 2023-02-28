import cx from 'classnames';
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import styles from './button.module.scss';

type ButtonType = 'primary' | 'secondary';

interface Props
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  styleType?: ButtonType;
}

const Button: React.FC<Props> = ({ className, children, styleType = 'primary' }) => {
  return <button className={cx(className, styles.button, styles[styleType])}>{children}</button>;
};

export default React.memo(Button);

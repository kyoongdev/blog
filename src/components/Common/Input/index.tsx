import cx from 'clsx';
import React, { forwardRef, type ReactElement } from 'react';

import styles from './input.module.scss';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  inputClassName?: string;
  isLabelDisabled?: boolean;
  errorText?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(
  (
    { className, label, inputClassName, isLabelDisabled, errorText, ...props },
    ref,
  ): ReactElement => {
    return (
      <label className={cx(styles.wrapper, className, { [styles.error]: Boolean(errorText) })}>
        {!isLabelDisabled && <span>{label}</span>}
        <input className={cx(styles.input, inputClassName)} ref={ref} {...props} />
        {errorText && <span className={styles.errorText}>{errorText}</span>}
      </label>
    );
  },
);

export default React.memo(Input);

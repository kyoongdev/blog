import cx from 'clsx';
import React, { forwardRef, type ReactElement } from 'react';

import styles from './input.module.scss';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  inputClassName?: string;
  isLabelDisabled?: boolean;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ className, label, inputClassName, isLabelDisabled, ...props }, ref): ReactElement => {
    return (
      <label className={cx(styles.wrapper, className)}>
        {!isLabelDisabled && <span>{label}</span>}
        <input className={cx(styles.input, inputClassName)} ref={ref} {...props} />
      </label>
    );
  },
);

export default React.memo(Input);

import { FC, ReactNode } from 'react';
import styles from './Button.module.css';
import classNames from 'classnames';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  appearance?: 'primary' | 'ghost';
}
export const Button: FC<ButtonProps> = ({ appearance = 'primary', children, ...props }) => {
  return (
    <button className={classNames(styles.button, styles[appearance])} {...props}>
      {children}
    </button>
  );
};

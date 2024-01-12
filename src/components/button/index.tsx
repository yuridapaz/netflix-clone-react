import { cva } from 'class-variance-authority';
import React, { ButtonHTMLAttributes, FC } from 'react';

type buttonProps = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'type' | 'disabled' | 'onClick' | 'children' | 'className'
> & {
  'data-testid'?: string;
};

const buttonVariants = cva('transition-all', {
  variants: {
    variant: {
      primary: '',
      secondary: '',
      outline: '',
      red: '',
    },
    size: {
      small: '',
      medium: '',
      large: '',
    },
  },
});

const Button: FC<buttonProps> = ({
  disabled,
  onClick,
  children,
  className,
  'data-testid': dataTestId,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={className}
      data-testid={dataTestId}
    >
      {children}
    </button>
  );
};

export default Button;

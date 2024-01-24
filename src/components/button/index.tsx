import { VariantProps } from 'class-variance-authority';
import React, { ButtonHTMLAttributes } from 'react';
import buttonVariants from './const.js';

type ButtonProps = VariantProps<typeof buttonVariants> &
  Pick<
    ButtonHTMLAttributes<HTMLButtonElement>,
    'disabled' | 'onClick' | 'children' | 'className'
  > & {
    'data-testid'?: string;
  };

const Button = ({
  disabled,
  onClick,
  children,
  className,
  'data-testid': dataTestId,
  variant,
  size,
  bold,
  fullWidth,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={buttonVariants({ variant, size, bold, className, fullWidth })}
      data-testid={dataTestId}
    >
      {children}
    </button>
  );
};

export default Button;

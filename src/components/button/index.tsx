import { VariantProps, cva } from 'class-variance-authority';
import React, { ButtonHTMLAttributes, FC } from 'react';

type buttonProps = VariantProps<typeof buttonVariants> &
  Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled' | 'onClick' | 'children' | 'className'> & {
    'data-testid'?: string;
  };

const buttonVariants = cva('transition-all m-auto', {
  variants: {
    variant: {
      primary: 'bg-none text-white',
      secondary: 'bg-white text-black',
      outline: 'bg-none text-gray-300 outline outline-1 outline-gray-300',
      red: 'bg-red-600 text-white rounded-md',
    },
    size: {
      small: 'p-2',
      medium: 'p-3',
      large: 'p-4',
    },
    bold: {
      true: 'font-bold',
    },
  },
});

const Button: FC<buttonProps> = ({
  disabled,
  onClick,
  children,
  className,
  'data-testid': dataTestId,
  variant,
  size,
  bold,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={buttonVariants({ variant, size, bold, className })}
      data-testid={dataTestId}
    >
      {children}
    </button>
  );
};

export default Button;

import { VariantProps, cva } from 'class-variance-authority';
import React, { ButtonHTMLAttributes } from 'react';

type ButtonProps = VariantProps<typeof buttonVariants> &
  Pick<
    ButtonHTMLAttributes<HTMLButtonElement>,
    'disabled' | 'onClick' | 'children' | 'className'
  > & {
    'data-testid'?: string;
  };

const buttonVariants = cva('transition-all m-auto cursor-pointer', {
  variants: {
    variant: {
      primary: 'bg-none text-white',
      secondary: 'bg-white text-black hover:bg-white/90',
      outline: 'bg-none text-gray-300 outline outline-1 outline-gray-300',
      red: 'bg-red-600 text-white rounded-md hover:bg-red-700',
    },
    size: {
      small: 'py-2 px-5',
      medium: 'py-3 px-6',
      large: 'py-4 px-7',
    },
    bold: {
      true: 'font-bold',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
  },
});

const Button = ({
  disabled,
  onClick,
  children,
  className,
  'data-testid': dataTestId,
  variant,
  size,
  bold,
}: ButtonProps) => {
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

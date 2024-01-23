import { VariantProps, cva } from 'class-variance-authority';
import React, { FC, InputHTMLAttributes } from 'react';

type TextInputProps = VariantProps<typeof textInputVariants> &
  Pick<
    InputHTMLAttributes<HTMLInputElement>,
    'placeholder' | 'className' | 'id' | 'onChange' | 'type' | 'autoComplete'
  > & {
    register?: any;
    'data-testid'?: string;
  };

const textInputVariants = cva('m-auto rounded-md text-sm outline-none', {
  variants: {
    variant: {
      primary: 'bg-slate-700 text-white placeholder:text-slate-300',
      secondary: 'bg-white text-black',
    },
    size: {
      small: 'p-2',
      medium: 'p-3',
      large: 'p-4',
    },
    fullWidth: {
      true: 'w-full',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
  },
});

const TextInput = ({
  placeholder,
  className,
  id,
  onChange,
  'data-testid': dataTestId,
  variant,
  size,
  fullWidth,
  type,
}: TextInputProps) => (
  <input
    type={type}
    id={id}
    placeholder={placeholder}
    onChange={onChange}
    data-testid={dataTestId}
    className={textInputVariants({ variant, size, fullWidth, className })}
  />
);

export default TextInput;

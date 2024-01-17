import { VariantProps, cva } from 'class-variance-authority';
import React, { FC, InputHTMLAttributes } from 'react';

type textInputProps = VariantProps<typeof textInputVariants> &
  Pick<InputHTMLAttributes<HTMLInputElement>, 'placeholder' | 'className' | 'id' | 'onChange'> & {
    register?: any;
    'data-testid'?: string;
  };

const textInputVariants = cva('m-auto rounded-md text-sm outline-none', {
  variants: {
    variant: {
      primary: 'bg-slate-500 text-white placeholder:text-slate-300',
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

const TextInput: FC<textInputProps> = ({
  placeholder,
  className,
  id,
  onChange,
  'data-testid': dataTestId,
  variant,
  size,
  fullWidth,
}) => {
  return (
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      onChange={onChange}
      data-testid={dataTestId}
      className={textInputVariants({ variant, size, fullWidth, className })}
    />
  );
};

export default TextInput;

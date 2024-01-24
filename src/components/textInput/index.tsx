import { VariantProps, cva } from 'class-variance-authority';
import React, { InputHTMLAttributes } from 'react';
import { textInputVariants } from './const.js';

type TextInputProps = VariantProps<typeof textInputVariants> &
  Pick<
    InputHTMLAttributes<HTMLInputElement>,
    'placeholder' | 'className' | 'id' | 'onChange' | 'type' | 'autoComplete'
  > & {
    register?: any;
    'data-testid'?: string;
  };

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

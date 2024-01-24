import { cva } from 'class-variance-authority';

export const textInputVariants = cva('m-auto rounded-md text-sm outline-none', {
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

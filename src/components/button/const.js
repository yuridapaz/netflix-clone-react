import { cva } from 'class-variance-authority';

export const buttonVariants = cva('transition-all m-auto cursor-pointer', {
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
    fullWidth: {
      true: 'w-full',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
  },
});

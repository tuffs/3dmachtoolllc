import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function classNames(...classes) {
  return twMerge(clsx(classes));
}

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
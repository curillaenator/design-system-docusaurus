import { ReactText } from 'react';

export const useCounter = (value: string | ReactText, maxLength?: number) => {
  if (typeof value === 'string') {
    return {
      usedLetters: value.length,
      remainedLetters: maxLength ? maxLength - value.length : value.length,
    };
  }

  return {
    usedLetters: value.toString().length,
    remainedLetters: maxLength ? maxLength - value.toString().length : value.toString().length,
  };
};

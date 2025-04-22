import { useState, useCallback, ChangeEvent } from 'react';

export const useLimitCounter = (limit: number) => {
  const [value, setValue] = useState<string>('');

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value.slice(0, limit)), [limit]);
  const onClearInput = useCallback(() => setValue(''), []);

  return {
    value,
    onChange,
    onClearInput,
    endMetaText: `${value.length}/${limit}`,
  };
};

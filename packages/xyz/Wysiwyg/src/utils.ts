export const parseJSONWithoutError = (v: string | unknown): string | Record<string, unknown> => {
  if (typeof v === 'string') {
    try {
      return JSON.parse(v);
    } catch (_) {
      return v;
    }
  }

  return '';
};

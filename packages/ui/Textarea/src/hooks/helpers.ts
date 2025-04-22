export const getComputedDimensions = (contentNodeLocal: HTMLDivElement) => {
  const width = parseInt(
    (contentNodeLocal && document?.defaultView?.getComputedStyle(contentNodeLocal).width) || '0',
    10,
  );
  const height = parseInt(
    (contentNodeLocal && document?.defaultView?.getComputedStyle(contentNodeLocal).height) || '0',
    10,
  );
  return { width, height };
};

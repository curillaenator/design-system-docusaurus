export const trimText = (text: string, maxCount: number) => (text.length > maxCount ? text.slice(0, maxCount) : text);

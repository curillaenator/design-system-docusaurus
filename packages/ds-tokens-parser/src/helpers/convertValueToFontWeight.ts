export const convertValueToFontWeight = (value: string): string => {
  switch (value.toLowerCase()) {
    case 'Heavy':
    case '600':
      return '600';

    case 'Bold':
    case '500':
      return '500';

    case 'Medium':
    case '400':
      return '400';

    case 'Regular':
    case '300':
      return '300';

    case 'Light':
    case '200':
      return '200';

    case 'Thin':
    case '100':
      return '100';

    default:
      return '400';
  }
};

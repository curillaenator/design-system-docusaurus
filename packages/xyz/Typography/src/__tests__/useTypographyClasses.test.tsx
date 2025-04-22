import { useTypographyClasses } from '../hooks/useTypographyClasses';
import { UseTypographyProps } from '../hooks/interfaces';

describe('Тест компонента Typography', () => {
  it('Хук генерирует необходимые стили', () => {
    const props: UseTypographyProps = {
      size: '2xl',
      appearance: 'positive',
      fontWeight: 'semibold',
      fontFamily: 'sans',
      lineHeight: 'low',
    };
    const expected = [
      `_size_${props.size}`,
      `_fontWeight-${props.fontWeight}`,
      `_fontFamily-${props.fontFamily}`,
      `_lineHeight-${props.lineHeight}`,
      `_colorPositive`,
    ];

    const resultClasses = useTypographyClasses(props);
    expect(resultClasses.split(' ')).toEqual(expect.arrayContaining(expected));
  });
});

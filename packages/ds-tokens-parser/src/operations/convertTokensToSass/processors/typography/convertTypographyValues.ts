import { convertPrimitiveValue } from '../../../../helpers/convertPrimitiveValue';
import { TypographyValue } from '../../../../types/tokens';

type InitialTypographyValue = Partial<Record<keyof TypographyValue, string>>;

export const convertTypographyValues = (rawValue?: TypographyValue): TypographyValue => {
  if (rawValue && typeof rawValue === 'object') {
    const result: InitialTypographyValue = {};
    Object.keys(rawValue).forEach((key: keyof TypographyValue) => {
      result[key] = convertPrimitiveValue({ value: rawValue[key], type: key });
    });

    return result as TypographyValue;
  }

  // @ts-ignore;
  return {};
};

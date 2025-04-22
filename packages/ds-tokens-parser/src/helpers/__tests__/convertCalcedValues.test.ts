import { convertCalcedValues } from '../convertCalcedValues';

describe('helpers#convertCalcedValues', () => {
  it('Should calc value in pixels', () => {
    const values = ['64 / 2', '56 / 2', '26px - 2', '10+10', '32px/ 2', '6*2'];
    const expected = ['32px', '28px', '24px', '20px', '16px', '12px'];

    values.forEach((val, i) => {
      expect(convertCalcedValues(val)).toBe(expected[i]);
    });
  });

  it('Should skip unpatterned values', () => {
    const values = ['px / 2', ' / 2', '-2', '10+', '32 2', '6/*2'];
    const expected = ['px / 2', ' / 2', '-2', '10+', '32 2', '6/*2'];

    values.forEach((val, i) => {
      expect(convertCalcedValues(val)).toBe(expected[i]);
    });
  });
});

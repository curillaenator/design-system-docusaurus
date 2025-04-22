import { escapeSpecialSymbols } from '../escapeSpecialSymbols';

describe('helpers#escapeSpecialSymbols', () => {
  it('Should set escaped names', () => {
    const TOKENS = ['neutral-900', 'neutral-900-80%', '*neutral!-${900]-^[#60%]'];
    const processedKeys = TOKENS.map(escapeSpecialSymbols);

    expect(processedKeys).toStrictEqual(['neutral-900', 'neutral-900-80\\%', '*neutral!-${900]-^[#60\\%]']);
  });
});

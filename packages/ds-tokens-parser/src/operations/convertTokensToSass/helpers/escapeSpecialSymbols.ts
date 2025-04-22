const RE_SYMBOLS = ['[', ']', '^', '$', '.', '|', '?', '*', '+', '(', ')'];
const BS = '\u005C';

export const escapeSpecialSymbols = (key: string): string =>
  ['%'].reduce((temp, symbol) => {
    if (!temp.includes(symbol)) {
      return temp;
    }
    const re = RE_SYMBOLS.includes(symbol) ? new RegExp(`${BS}${symbol}`, 'g') : new RegExp(`${symbol}`, 'g');

    return temp.replace(re, `${BS}${symbol}`);
  }, key);

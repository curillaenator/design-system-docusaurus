// запускать данный скрипт для обновления блоков кода нужно только
// если обновяться токены color-gradient-transparent,

const path = require('path');
const { format } = require('prettier');
const fs = require('fs');
const SOURCE = require('@kit-xyz/theme/src/dist/XYZ.json');

const dist = path.resolve(__dirname, './examples/');
const TOKENS = SOURCE.values.style['color-gradient-transparent'];

const groupByColor = () => {
  const grouped = {
    neutral: {},
    'accent-1': {},
    'accent-2': {},
    informative: {},
    positive: {},
    attention: {},
    negative: {},
  };

  Object.entries(TOKENS).forEach(([key, token]) => {
    switch (true) {
      case key.includes('neutral'):
        return (grouped.neutral[key] = token);
      case key.includes('accent-1'):
        return (grouped['accent-1'][key] = token);
      case key.includes('accent-2'):
        return (grouped['accent-2'][key] = token);
      case key.includes('informative'):
        return (grouped.informative[key] = token);
      case key.includes('positive'):
        return (grouped.positive[key] = token);
      case key.includes('attention'):
        return (grouped.attention[key] = token);

      default:
        return (grouped.negative[key] = token);
    }
  });

  return Object.entries(grouped);
};

const data = groupByColor();

data.forEach(([groupName, values]) => {
  const destination = path.resolve(dist, `${groupName}.txt`);
  const file = format(JSON.stringify(values), { parser: 'json', printWidth: 60 });
  fs.writeFileSync(destination, file);
});

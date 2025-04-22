const path = require('path');
const fs = require('fs');

const { format } = require('prettier');

const combineTokens = (src) => {
  const chunks = fs.readdirSync(path.resolve(__dirname, `${src}/chunks`));
  const { version } = require(path.resolve(__dirname, `${src}/XYZ.json`));

  const values = Object.fromEntries(
    chunks.map((fileName) => {
      const content = require(path.resolve(__dirname, `${src}/chunks/${fileName}`));
      return [fileName.replace('.json', ''), content];
    }),
  );

  const updated = {
    version,
    updatedAt: new Date().toLocaleString(),
    values,
  };

  fs.writeFileSync(
    path.resolve(__dirname, `${src}/XYZ.json`),
    format(JSON.stringify(updated), { parser: 'json', endOfLine: 'lf' }),
  );
};

module.exports = {
  combineTokens,
};

const addDemo = require('./addDemo');

const loader = async function (content) {
  const callback = this.async();
  const options = this.getOptions();

  let result;

  try {
    result = await addDemo(content, this.resourcePath, options);
  } catch (err) {
    return callback(err);
  }

  return callback(null, result);
};

module.exports = loader;

 const path = require('path');
 const addDemoUikit = require('./addDemoUikit');
const addDemoThemeRepository = require('./addDemoThemeRepository');

const addDemo = async (content, resourcePath, options) => {
  if (options.useLocaleVersion) {
    return addDemoUikit(content, resourcePath, options.tsx);
  }

  return addDemoThemeRepository(content, resourcePath, options.tsx);
}

module.exports = addDemo;

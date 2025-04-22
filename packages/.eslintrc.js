module.exports = {
  "overrides": [
    {
      "files": ["*.test.tsx"],
      "rules": {
        "testing-library/no-node-access": ["off"],
        "testing-library/prefer-presence-queries": ["off"],
        "testing-library/render-result-naming-convention": ["off"],
        "testing-library/no-container": ["off"],
        "jest/no-disabled-tests": ["off"],
        "testing-library/prefer-screen-queries": ["off"],
        "testing-library/await-async-utils": ["off"],
      }
    }
  ]
};

const config = require("../../../fe-scripts/configs/rollup.config.js");
const pkg = require('./package.json');

export default [
    config.getConfig(pkg, true),
];


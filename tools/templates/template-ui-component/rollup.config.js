import config from "@pcbl/fe-scripts/configs/rollup.config.js";
import pkg from './package.json';

export default [
  config.getConfig(pkg, true),
];
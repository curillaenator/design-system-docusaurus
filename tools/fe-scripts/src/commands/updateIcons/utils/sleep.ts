import { baseConfig } from '../baseConfig';

export const sleep = (timeout = baseConfig.sleep) =>
  new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });

import https from 'https';

import cacheDecorator from '../service/cacheHelpers/cacheDecorator';
import { sleep } from '../utils/sleep';

export const options = (token: string) => ({
  host: 'api.figma.com',
  // port: 443,
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'X-Figma-Token': token,
  },
});

const request = async (path: string, token = '', count = 10): Promise<any> => {
  await sleep();

  return new Promise((resolve, reject) => {
    const req = https.request({ ...options(token), path }, (res) => {
      let str = '';

      res.on('data', (buffer) => {
        str += buffer;
      });

      res.on('end', () => {
        resolve(JSON.parse(str));
      });

      req.on('timeout', () => {
        console.error('request timeout');
      });

      res.on('error', () => {
        reject(JSON.parse(str));
      });
    });

    req.end();
  }).catch(() => {
    console.log('count', count);

    if (count === 0) {
      throw new Error();
    }
    return request(path, token, count - 1);
  });
};

export default cacheDecorator(request, 'file');

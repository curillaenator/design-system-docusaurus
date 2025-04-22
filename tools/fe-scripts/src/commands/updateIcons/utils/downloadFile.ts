import fs from 'fs';
import https from 'https';

import fse from 'fs-extra';

const downloadFile = (path: string, url: string) =>
  new Promise((resolve, reject) => {
    const file = fs.createWriteStream(path);
    https.get(url, function (response) {
      response.pipe(file);

      response.on('error', function () {
        fse.removeSync(path);
        reject(file);
      });

      response.on('end', function () {
        resolve(file);
      });
    });
  });

export default downloadFile;

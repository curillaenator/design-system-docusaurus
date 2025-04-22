import * as path from 'path';

import fs from 'fs-extra';

import { IconInfo } from '../interfaces';
import { baseConfig } from '../baseConfig';

const generateDuplicationReport = (suspected: IconInfo[]) => {
  fs.removeSync(baseConfig.reportPath);
  fs.mkdirSync(baseConfig.reportPath);
  const assetsPath = path.resolve(baseConfig.reportPath, 'assets');
  fs.mkdirSync(assetsPath);

  const lines: string[] = [];
  suspected.forEach((i) => {
    const duplicationPath = path.resolve(assetsPath, `${i.fullName}.svg`);
    fs.copyFileSync(i.originSvgPath, duplicationPath);

    const link = i.link as IconInfo;
    const originalPath = path.resolve(assetsPath, `${link.fullName}.svg`);
    fs.copyFileSync(link.originSvgPath, originalPath);

    lines.push(`
      <tr>
        <td>
          <div>${i.fullName}</div>
          <div>${i.targetPath}</div>
          <img alt="" src="${path.relative(baseConfig.reportPath, duplicationPath)}" />
        </td>
        <td>
          <div>${link.fullName}</div>
          <div>${link.targetPath}</div>
          <img alt="" src="${path.relative(baseConfig.reportPath, originalPath)}" />
        </td>
    </tr>`);
  });

  const file = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
    </head>
    <body>
        <table>
            ${lines.join('')}
        </table>
    </body>
    </html>
  `;

  fs.writeFileSync(path.resolve(baseConfig.reportPath, 'report.html'), file);
};

export default generateDuplicationReport;

import path from 'path';
import fs from 'fs';
import { transform } from '@svgr/core';
import { getAllFilesFromDirRecursively } from '../../utils/getAllFilesFromDirRecursively';
import getCamelCaseName from '../utils/getCamelCaseName';

export const convertToTSX = async (sourceDir: string, distDir = '', replace = false) => {
  if (!sourceDir) return console.error('Не указан путь');
  const files = await getAllFilesFromDirRecursively(sourceDir);
  const svgFiles = files.filter((path) => path.includes('.svg'));
  for (const filePath of svgFiles) {
    const fileName = path.basename(filePath, '.svg');
    const iconName = getCamelCaseName(fileName);
    const componentName = iconName.charAt(0).toUpperCase() + iconName.slice(1);
    const file = fs.readFileSync(filePath, { encoding: 'utf-8' });
    const prefixedIcon = await transform(file, {
      plugins: ['@svgr/plugin-svgo'],
      svgoConfig: {
        plugins: [
          {
            name: 'prefixIds',
            params: {
              prefix: iconName,
            },
          },
        ],
      },
    });
    const icon = await transform(prefixedIcon, { ref: true, typescript: true }, { componentName: componentName });
    const pathNameTsx = filePath.replace('.svg', '.tsx');
    fs.writeFileSync(distDir || pathNameTsx, icon);
    if (replace) {
      fs.unlinkSync(filePath);
    }
  }
};

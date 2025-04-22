import fs from 'fs';
import { getAllFilesFromDirRecursively } from '../../utils/getAllFilesFromDirRecursively';

export const editMapFiles = async (sourceDir: string) => {
  if (!sourceDir) return console.error('Не указан путь');
  const files = await getAllFilesFromDirRecursively(sourceDir);
  files.forEach((filePath) => {
    const file = fs.readFileSync(filePath, { encoding: 'utf-8' });
    const editedFile = file.replace(/\.svg/g, '.tsx');
    fs.writeFileSync(filePath, editedFile);
  });
};

import { Command } from 'commander';
import { convertToTSX } from './convertIconsToTSX';
import { editMapFiles } from './editMapFiles';

export const convert = async (cmd: Command) => {
  const { path, dist, replace } = cmd;
  await convertToTSX(path, dist, replace);
};

export const editMap = async (cmd: Command) => {
  const { path } = cmd;
  await editMapFiles(path);
};

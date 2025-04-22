import path from 'path';
import os from 'os';
import fs from 'fs-extra';

function isIncludesOwnConfig(args: string[], ...params: string[]): boolean {
  // eslint-disable-next-line  no-restricted-syntax
  for (const param of params) {
    if (args.includes(param)) {
      return true;
    }
  }
  return false;
}

async function runJest(args: string[]): Promise<void> {
  // для корректного резолвинга babel env test перезаписываем process.env.NODE_ENV
  if (process.env.NODE_ENV !== 'test') {
    process.env.NODE_ENV = 'test';
  }

  if (process.env.BABEL_ENV !== 'test') {
    process.env.BABEL_ENV = 'test';
  }
  // все аргументы переданные в jest

  if (!isIncludesOwnConfig(args, '-c', '--config')) {
    const usageFromBuild = fs.pathExistsSync(path.resolve(__dirname, '../../../../build'));
    const CONFIG_PATH = usageFromBuild ? '../../../../../../' : '../../../../../';
    const isRemoteUsage = fs.pathExistsSync(path.resolve(__dirname, CONFIG_PATH, '../node_modules'));
    args.push('--config', path.resolve(__dirname, '../../../configs/jest.package.js'));
  }

  args.push('--passWithNoTests');
  args.push(`--maxWorkers=${os.cpus().length - 1 || 1}`);

  // запуск jest  c переданными параметрами и путем до конфига (jest.package.js в корне проекта)
  // eslint-disable-next-line
  await require('jest').run(args);
}

export default runJest;

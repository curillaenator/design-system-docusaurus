import { resolve as resolvePath } from 'path';
import walk from 'klaw-sync';
import fs from 'fs-extra';
import rif from 'replace-in-file';
import chalk from 'chalk';

import collectData from './utils/collectData';
import { config } from './config';
import { PackageData } from './interfaces';

const replaceTemplateString = (path: string, packageData: PackageData): void => {
  const from: RegExp[] = Object.keys(packageData).map((field) => new RegExp(config[field as keyof PackageData].templateString, 'g'));
  from.push(new RegExp('PACKAGE_NAME', 'g'));

  const to: string[] = Object.values(packageData) as string[];
  const snakeCase = packageData.name.replace(/[A-Z]/g, (letter, index) => (index == 0 ? letter.toLowerCase() : '-' + letter.toLowerCase()));
  to.push(snakeCase);

  const options = {
    files: path,
    from,
    to,
  };

  try {
    rif.sync(options);
  } catch (error) {
    console.error('Error occurred:', error);
    process.exit(1);
  }
};

const forbiddenDirs = ['common-types', 'storybook-components', 'theme', '.DS_Store'];

export default async (): Promise<void> => {
  const packageData = await collectData(config);
  const SRC_PATH = __dirname.indexOf('node_modules') > -1 ? '../../../../../../../' : '../../../../../../';
  const pathDir = resolvePath(__dirname, SRC_PATH, `packages/${packageData.dir}`);
  const isDirExists = fs.existsSync(pathDir);

  if (!isDirExists || forbiddenDirs.includes(packageData.dir)) {
    const paths = resolvePath(__dirname, SRC_PATH, 'packages');
    const dirs = fs.readdirSync(paths);

    console.log(
      chalk.red(
        `Ошибка! Директории ${packageData.dir} в packages не существует или выбрана не та директория (запрещенные директории ${forbiddenDirs.join(
          ', ',
        )})`,
      ),
    );

    console.log(`Доступные директории: ${chalk.green(dirs.filter((item) => !forbiddenDirs.includes(item)).join(', '))}`);
    return;
  }

  // директория, в которой будет создан пакет
  const packageDefaultDirPath = `packages/${packageData.dir}/${packageData.name}`;
  const templateDir = resolvePath(__dirname, SRC_PATH, 'tools/templates/template-ui-component');

  fs.copySync(templateDir, packageDefaultDirPath);

  const paths = walk(packageDefaultDirPath);
  paths.forEach((it) => {
    replaceTemplateString(it.path, packageData);
    const newPath = it.path.replace(config.name.templateString, packageData.name);

    console.log(chalk.green(`Generating file: ${newPath}`));

    if (newPath !== it.path) {
      fs.renameSync(resolvePath(it.path), resolvePath(newPath));
    }
  });

  console.log();
  console.log(chalk.green(`Пакет успешно создан в ${packageDefaultDirPath}`));
};

import fs from 'fs';
import path from 'path';
import execa from 'execa';
import uniq from 'lodash/uniq';
import chalk from 'chalk';
import semver from 'semver';
// @ts-ignore
import inquirer from 'inquirer';
import { Command } from 'commander';

import { PackageJson as JsonType } from '../utils/types';
import { StringMap } from '../utils/types/package.json.typings';

const P_JSON_NAME = 'package.json';

const startPathRExp = /((^\/?packages\/.*)|(^\/?tools\/.*))/;
const allowedDepsRExp = /((^@pcbl-ui-v4\/.+)|(^@kit-base\/.+))/;

interface PackageJson extends JsonType {
  name: string;
  dependencies: StringMap;
  devDependencies: StringMap;
}

interface OutdatedPackage {
  current: string;
  latest: string;
  name: string;
  workspace: string;
}

type OutdatedByPackage = Record<
  string,
  Record<
    string,
    {
      current: string;
      latest: string;
    }
  >
>;

type OutdatedByPackageArr = [
  string,
  Array<
    [
      string,
      {
        current: string;
        latest: string;
      },
    ]
  >,
];

class Package {
  constructor(public packageName: string, private pathToPackage: string, private jsonContent: PackageJson) {}

  update(depsToUpdate: [string, { current: string; latest: string }][]) {
    depsToUpdate.forEach((outdatedDep) => {
      const [depName, depData] = outdatedDep;

      if (depName in this.jsonContent.dependencies) {
        this.jsonContent.dependencies[depName] = depData.latest;
      }

      if (depName in this.jsonContent.devDependencies) {
        this.jsonContent.devDependencies[depName] = depData.latest;
      }
    });

    this.save();
  }

  save() {
    fs.writeFileSync(this.pathToPackage, JSON.stringify(this.jsonContent, null, '  ') + '\n');
  }
}

const removeLastItem = (path: string): string => {
  const the_arr = path.split('/');
  the_arr.pop();
  return the_arr.join('/');
};

const getPathToJson = (casePath: string): string | undefined => {
  if (casePath.length === 0) {
    return undefined;
  }

  const files = fs.readdirSync(casePath);

  const packageJsonName = files.find((fileName) => fileName === P_JSON_NAME);

  if (packageJsonName) {
    return path.join(casePath, packageJsonName);
  }

  return getPathToJson(removeLastItem(casePath));
};

const getPathsToJson = async (): Promise<string[]> => {
  const { stdout: affectedFilesString } = await execa('git', ['diff', '--staged', '--name-only']);

  const uniquePathsSet = new Set<string>();

  if (affectedFilesString.length === 0) {
    console.log('Нет отслеживаемых файлов.');
    process.exit(0);
  }

  const affectedFiles = (affectedFilesString as string).split('\n').map((filepath) => filepath.trim());

  for (let affectedPath of affectedFiles) {
    if (fs.existsSync(affectedPath)) {
      const packagePath = getPathToJson(path.parse(affectedPath).dir);

      if (packagePath) {
        uniquePathsSet.add(packagePath);
      }
    }
  }

  if (uniquePathsSet.size === 0) {
    console.log('Пакеты не найдены');
    process.exit(0);
  }

  return Array.from(uniquePathsSet);
};

const filterQualifiedPaths = (paths: string[]): string[] => paths.filter((path) => startPathRExp.test(path));

const collectPackages = (paths: string[]) => {
  const packages: Package[] = [];
  let allDependencies: string[] = [];

  paths.forEach((path) => {
    const jsonRawContent = fs.readFileSync(path, 'utf-8');
    const jsonContent: PackageJson = JSON.parse(jsonRawContent);

    const deps = Object.keys(jsonContent.dependencies!).concat(Object.keys(jsonContent.devDependencies!));

    packages.push(new Package(jsonContent.name!, path, jsonContent));
    allDependencies = uniq([...allDependencies, ...deps]);
  });

  const dependencies = allDependencies.filter((depName) => allowedDepsRExp.test(depName));
  return { packages, dependencies };
};

const checkDeps = async (deps: string[], patch: boolean): Promise<OutdatedPackage[]> => {
  const { stdout: outdatedPackages } = await execa('yarn', ['outdated', '--json', ...deps]);

  if (outdatedPackages.length > 0 && patch) {
    const parsed: OutdatedPackage[] = JSON.parse(outdatedPackages);
    const filteredSemver = parsed.filter((outdatedDep) => {
      return (
        semver.minor(outdatedDep.current) === semver.minor(outdatedDep.latest) &&
        semver.major(outdatedDep.current) === semver.major(outdatedDep.latest)
      );
    });

    return filteredSemver;
  }

  return JSON.parse(outdatedPackages) || [];
};

const askToUpdate = async (outdated: OutdatedByPackageArr[]): Promise<boolean> => {
  let question = 'В затронутых пакетах найдены следующие зависмости:\n\n';
  outdated.forEach((outdatedPackage) => {
    question += `В ${outdatedPackage[0]}:\n`;
    outdatedPackage[1].forEach(([outdatedDepName, depInfo]) => {
      question += `${' '.repeat(5)}${chalk.cyan(outdatedDepName)} ${chalk.red(depInfo.current)} -> ${chalk.green(depInfo.latest)}\n`;
    });
  });

  const yesToUpdate = 'Обновить';
  const skipUpdate = 'Пропустить обновление';

  const ans = await inquirer.prompt([
    {
      type: 'list',
      name: 'update',
      message: question,
      choices: [skipUpdate, yesToUpdate],
    },
  ]);

  return ans.update === yesToUpdate;
};

const getDepsByPackage = (outdatedArr: OutdatedPackage[], packages: Package[]): OutdatedByPackageArr[] => {
  const utdatedByPackageObj: OutdatedByPackage = outdatedArr.reduce((prev: OutdatedByPackage, curr) => {
    const packageModified = packages.find((packageInfo) => packageInfo.packageName === curr.workspace);

    if (!packageModified) {
      return prev;
    }

    return {
      ...prev,
      [curr.workspace]: {
        ...prev[curr.workspace],
        [curr.name]: {
          current: curr.current,
          latest: curr.latest,
        },
      },
    };
  }, {});

  return Object.entries(utdatedByPackageObj).map((outdatedPaackage) => [outdatedPaackage[0], Object.entries(outdatedPaackage[1])]);
};

const updatePackages = (outdatedPackages: OutdatedByPackageArr[], packages: Package[]) => {
  outdatedPackages.forEach((outdatedPackage) => {
    const [packageName, depsToUpdate] = outdatedPackage;

    const packageToUpdate = packages.find((outdatedPackage) => outdatedPackage.packageName === packageName);

    packageToUpdate?.update(depsToUpdate);
  });
};

export default async ({ patch }: Command) => {
  // Проверка, что все файлы добавлены в staged area
  const { stdout: untrackedFiles } = await execa('git diff --name-only', { shell: true });

  if (untrackedFiles.length > 0) {
    console.log('Есть неотслеживаемые файлы. Не забудьте выполнить git add .');
    process.exit(0);
  }

  console.log('Проверка пакетов на устаревшие зависимости...');

  // Проверяем, что текущая ветка - feature branch
  const { stdout: branchName } = await execa('git symbolic-ref --short HEAD', { shell: true });

  if (branchName === '(no branch)' || branchName === 'master') {
    console.log(`Ветка ${branchName} не подходит для обновления пакетов.`);
    process.exit(0);
  }

  // получаем массив пуей к package.json затронутых пакетов
  const rawPathsToJson = await getPathsToJson();

  // оставляем пути только из рабочих пространств packages и tools
  const filteredQualifiedPaths = filterQualifiedPaths(rawPathsToJson);

  const { packages, dependencies } = collectPackages(filteredQualifiedPaths);

  const outdatedPackages = await checkDeps(dependencies, patch);

  if (outdatedPackages.length < 1) {
    console.log('Зависимостей для обновления не найдено.');
    process.exit(0);
  }

  const outdatedByPackageArr = getDepsByPackage(outdatedPackages, packages);

  if (outdatedByPackageArr.length < 1) {
    console.log('В измененных пакетах зависимостей для обновления не найдено.');
    process.exit(0);
  }

  const isToUpdate = await askToUpdate(outdatedByPackageArr);

  if (isToUpdate) {
    updatePackages(outdatedByPackageArr, packages);

    console.log('Обновление...');

    const { stderr } = await execa('yarn', { shell: true });

    if (stderr.length > 0) {
      console.log(stderr);
      process.exit(0);
    }

    await execa('git add .', { shell: true });

    console.log('Обновление завершено!');
  }
};

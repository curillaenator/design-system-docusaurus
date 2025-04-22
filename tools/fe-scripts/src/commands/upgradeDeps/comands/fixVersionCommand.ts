import fs from 'fs-extra';

import { CommandInterface } from '../interfaces';
import getDependenciesWithNewVersion from '../utils/getDependencyNewVersion';
import { PackageJson } from '../../../utils/types';

const fixVersionCommand: CommandInterface = async (dependencies, { packageJson, packageJsonPath }) => {
  if (!dependencies.length) {
    return false;
  }
  const dependenciesWithActualVersion = await getDependenciesWithNewVersion(dependencies, packageJson);
  const newPackageJson: PackageJson = JSON.parse(JSON.stringify(packageJson));

  dependenciesWithActualVersion.forEach(({ name, section, latestVersion }) => {
    // @ts-ignore
    newPackageJson[section][name] = latestVersion;
  });

  const updatedPackageJsonContent = `${JSON.stringify(newPackageJson, null, '  ')}\n`;
  fs.writeFileSync(packageJsonPath, updatedPackageJsonContent);

  return true;
};

export default fixVersionCommand;

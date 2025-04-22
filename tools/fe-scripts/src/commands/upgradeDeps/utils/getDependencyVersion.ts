import { DependencyItemInterface } from '../interfaces';
import { PackageJson } from '../../../utils/types';

const getDependencyVersion = (dependency: DependencyItemInterface, packageJson: PackageJson): string => {
  // @ts-ignore
  return packageJson[dependency.section][dependency.name];
};

export default getDependencyVersion;

import { DependencyItemInterface, dependencySectionTypes } from '../interfaces';
import { PackageJson } from '../../../utils/types';

const getDependencyItems = (dependencySection: dependencySectionTypes, packageJson: PackageJson): DependencyItemInterface[] => {
  const dependenciesNames: string[] = Object.keys(packageJson[dependencySection] || {}) as string[];

  return dependenciesNames.map((dependencyName: string) => ({
    section: dependencySection,
    name: dependencyName,
  }));
};

export default getDependencyItems;

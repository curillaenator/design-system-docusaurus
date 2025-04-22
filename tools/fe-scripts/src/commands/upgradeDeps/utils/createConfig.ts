import { UpgradeConfigInterface, CreateConfigInterface } from '../interfaces';
import showOutdateCommand from '../comands/showOutdateCommand';
import fixVersionCommand from '../comands/fixVersionCommand';

const createConfig = ({ fix, showOutdate, packages }: CreateConfigInterface): UpgradeConfigInterface => {
  const config: UpgradeConfigInterface = {
    dependencyFilters: [],
    commands: [],
    sections: ['devDependencies', 'dependencies'],
  };

  if (packages.length) {
    config.dependencyFilters.push(({ name }) => packages.includes(name));
  } else {
    config.dependencyFilters.push(({ name }) => name.includes('@pcbl-ui'));
  }

  if (showOutdate) {
    config.commands.push(showOutdateCommand);
  }

  if (fix) {
    config.commands.push(fixVersionCommand);
  }

  return config;
};

export default createConfig;

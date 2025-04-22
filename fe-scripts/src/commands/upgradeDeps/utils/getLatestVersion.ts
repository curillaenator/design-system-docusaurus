import execa from 'execa';

import cachingDecorator from './cachingDecorator';

const getLatestVersion = async (packageName: string): Promise<string> => {
  const { stdout } = await execa('yarn', ['info', packageName, '--json']);
  const res = JSON.parse(stdout);
  const versions = res.data.versions.filter((name: string) => !name.includes('-alpha'));

  return versions.pop();
};

export default cachingDecorator(getLatestVersion);

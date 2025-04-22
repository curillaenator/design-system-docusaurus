import execa from 'execa';

import { Structure } from '../utils/types/package.json.typings';

interface PackageStructure {
  name: string;
  version: string;
}

export interface CommitObject {
  hash: string;
  subject: string;
}

const PROJECT_URL = `https://bitbucket.pcbltools.ru/bitbucket/projects/EDUPOWER/repos/uikit`;

const generateLink = ({ url, title }: { url: string; title: string }): string => `<${url}|${title}>`;

function parseTag(tag: string): PackageStructure {
  const data = tag.split('@');
  return {
    name: data.slice(0, data.length - 1).join('@'),
    version: data[data.length - 1],
  };
}

async function getLernaDirectory({ pkg, cwd = process.cwd() }: { pkg: PackageStructure; cwd: string }): Promise<string> {
  const { stdout: lernaStdout } = await execa('node_modules/.bin/lerna', ['list', '--json'], { cwd });
  const lernaPackagesList = JSON.parse(lernaStdout);
  const lernaPackage = lernaPackagesList.find((lernaPkg: PackageStructure) => lernaPkg.name === pkg.name);
  if (!lernaPackage) return '';
  return lernaPackage.location.replace(`${process.cwd()}/`, '');
}

/**
 * Формирует список комитов с предыдущего тэга по пакету
 * @param pkg пакет, по которому нужно сформировать списк комитов
 * @param tagList список тэгов с последнего комита
 * @param cwd
 */
async function getLernaPreviousTagDiff({
  pkg,
  cwd = process.cwd(),
}: {
  pkg: PackageStructure;
  cwd?: string;
}): Promise<{ commits?: CommitObject[]; directory?: string }> {
  const directory = await getLernaDirectory({ pkg, cwd });
  return {
    directory,
  };
}

/**
 * Получает список тэгов с последнего комита: если тэгов нет - возвращаем пустой массив
 */
async function getTagsList(cwd = process.cwd()): Promise<string[]> {
  const { stdout: tagListOutput } = await execa('git', ['tag', '--points-at', 'HEAD'], { cwd });
  return tagListOutput ? tagListOutput.split('\n') : [];
}

function generateDirectoryLink({ projectUrl, hash, directory }: { projectUrl: string; hash: string; directory?: string }): string {
  return `${projectUrl}/browse/${directory || ''}?at=${hash}`;
}

/**
 * Получает сообщение для нотификации в слак
 */
function generateLibraryReleaseMessage({ name, version, directory, projectUrl }: Structure & { directory?: string; projectUrl: string }): string {
  const repoLink = generateLink({
    url: generateDirectoryLink({
      projectUrl,
      hash: `${name}@${version}`,
      directory,
    }),
    title: `\`${name}@${version}\``,
  });

  return [`:tada: Релиз ${repoLink}`].join('\n\n');
}

export default async (): Promise<void> => {
  /** Получаем список тэгов после публикации пакетов, который к этому времени уже есть в bitbucket */
  const tagList = await getTagsList();

  if (!tagList.length) {
    process.stdout.write('Нет измененных пакетов');
    return;
  }

  const slackMessages: string[] = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const tag of tagList) {
    const { name, version } = parseTag(tag);

    if (!name || !version) {
      return;
    }

    // eslint-disable-next-line no-await-in-loop
    const { directory } = await getLernaPreviousTagDiff({ pkg: { name, version } });

    const text = generateLibraryReleaseMessage({
      name,
      version,
      directory,
      projectUrl: PROJECT_URL,
    });

    slackMessages.push(text);
  }

  process.stdout.write(slackMessages.join('\n\n'));
};

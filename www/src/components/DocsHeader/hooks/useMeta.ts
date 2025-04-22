import { DocsHeaderProps } from '../interfaces';

export const useMeta = (props: DocsHeaderProps) => {
  const { bitbucketLink, figmaLink, jiraLink, status, info } = props;

  return {
    links: [
      { title: 'bitbucket', link: bitbucketLink },
      { title: 'figma', link: figmaLink },
      { title: 'jira', link: jiraLink },
    ].filter((l) => !!l.link),

    badges: [
      { title: status, appearance: 'secondary-transparent' },
      { title: info, appearance: 'primary-transparent' },
    ].filter((v) => !!v.title),
  };
};

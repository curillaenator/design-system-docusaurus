type FrontMatterHeaderMeta =
  | 'title'
  | 'description'
  | 'bitbucketLink'
  | 'figmaLink'
  | 'jiraLink'
  | 'copywriter'
  | 'copywriterLink'
  | 'designer'
  | 'designerLink'
  | 'developer'
  | 'developerLink'
  | 'status'
  | 'info'
  | 'actualVersion'
  | 'headerImage';

export interface DocsHeaderProps extends Partial<Record<FrontMatterHeaderMeta, string>> {
  hasPadding?: boolean;
  versions: string[];
}

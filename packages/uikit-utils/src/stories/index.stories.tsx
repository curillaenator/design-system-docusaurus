import ChangeLog from '../../CHANGELOG.md';

import UtilsDocs from './UtilsDocs.mdx';

export default {
  title: 'Utilities / UIKitUtils',
  parameters: {
    changelog: ChangeLog,
  },
};

export const Default = () => null;

Default.parameters = {
  docs: {
    page: UtilsDocs,
  },
  previewTabs: {
    canvas: { hidden: true },
  },
  viewMode: 'docs',
};

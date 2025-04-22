import React from 'react';
import clsx from 'clsx';
import { ThemeClassNames } from '@docusaurus/theme-common';
// import { useDoc } from '@docusaurus/theme-common/internal';
import MDXContent from '@theme/MDXContent';
// import { DocsHeader } from '@site/src/components/DocsHeader';
import type { Props } from '@theme/DocItem/Content';

import styles from './styles.module.scss';

/**
 Title can be declared inside md content or declared through
 front matter and added manually. To make both cases consistent,
 the added title is added under the same div.markdown block
 See https://github.com/facebook/docusaurus/pull/4882#issuecomment-853021120

 We render a "synthetic title" if:
 - user doesn't ask to hide it with front matter
 - the markdown content does not already contain a top-level h1 heading
*/

const DocItemContent = ({ children }: Props): JSX.Element => (
  // const { metadata, frontMatter, contentTitle } = useDoc();
  // const shouldRender = !frontMatter.hide_title && typeof contentTitle === 'undefined';
  // const syntheticTitle = shouldRender ? metadata.title : null;

  <div className={clsx(ThemeClassNames.docs.docMarkdown, 'markdown', styles.markdown)}>
    {/* {syntheticTitle && <DocsHeader {...frontMatter} />} */}

    <MDXContent>{children}</MDXContent>
  </div>
);
export default DocItemContent;

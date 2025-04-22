import React from 'react';
// import cn from 'classnames';
import { ThemeClassNames } from '@docusaurus/theme-common';
import { useDoc } from '@docusaurus/theme-common/internal';
// import TOCCollapsible from '@theme/TOCCollapsible';
import TOC from '@theme/TOC';

// import styles from './styles.module.scss';

export default function DocItemTOCMobile(): JSX.Element {
  const { toc, frontMatter } = useDoc();

  return (
    <TOC
      toc={toc}
      minHeadingLevel={frontMatter.toc_min_heading_level}
      maxHeadingLevel={frontMatter.toc_max_heading_level}
      className={ThemeClassNames.docs.docTocDesktop}
    />
  );

  // return (
  //   <div className={styles.wrapper}>
  //     <TOCCollapsible
  //       toc={toc}
  //       minHeadingLevel={frontMatter.toc_min_heading_level}
  //       maxHeadingLevel={frontMatter.toc_max_heading_level}
  //       className={cn(ThemeClassNames.docs.docTocMobile, styles.tocMobile)}
  //     />
  //   </div>
  // );
}

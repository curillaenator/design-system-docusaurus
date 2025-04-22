import React, { useState, useCallback, useMemo } from 'react';
import cn from 'classnames';
import BrowserOnly from '@docusaurus/BrowserOnly';
import DocItemPaginator from '@theme/DocItem/Paginator';
import DocItemContent from '@theme/DocItem/Content';
import type { Props } from '@theme/DocItem/Layout';
import { DocItemContext } from '@site/src/services/docItemContext';
import { DocsHeader } from '@site/src/components/DocsHeader';

import type { DocsHeaderProps } from '../../../components/DocsHeader';

import { DesktopToc, MobileToc } from './components/Tocs';
import styles from './styles.module.scss';

// import { useDocTOC } from './hooks/useDocTOC';
// import DocVersionBanner from '@theme/DocVersionBanner';
// import DocVersionBadge from '@theme/DocVersionBadge';
// import DocBreadcrumbs from "@theme/DocBreadcrumbs";
// import DocItemFooter from '@theme/DocItem/Footer';

export default function DocItemLayout({ children }: Props): JSX.Element {
  // const { mobile, desktop } = useDocTOC();

  const [headerMeta, setHeaderMeta] = useState<DocsHeaderProps | null>(null);
  const [selectedVersion, setSelectedVersion] = useState<string>('');

  const handleHeaderMeta = useCallback((newHeaderMeta: DocsHeaderProps) => setHeaderMeta(newHeaderMeta), []);
  const handleSelectedVersion = useCallback((newVersion: string) => setSelectedVersion(newVersion), []);

  const docItemContext = useMemo(
    () => ({
      ...headerMeta,
      selectedVersion,
      setSelectedVersion: handleSelectedVersion,
      setHeaderContext: handleHeaderMeta,
    }),
    [headerMeta, selectedVersion, handleSelectedVersion, handleHeaderMeta],
  );

  return (
    <DocItemContext.Provider value={docItemContext}>
      {/* <DocVersionBanner /> */}
      <DocsHeader {...headerMeta} />

      <div className={cn('row', styles.docItemRow)}>
        <div className={cn('col', styles.docItemCol)}>
          <article>
            {/* <DocBreadcrumbs /> */}
            {/* <DocVersionBadge /> */}
            {/* {mobile} */}
            <BrowserOnly>{() => <MobileToc />}</BrowserOnly>

            <DocItemContent>{children}</DocItemContent>

            {/* <DocItemFooter /> */}
          </article>

          <DocItemPaginator />
        </div>

        {/* {desktop && <div className={cn('col', styles.toc)}>{desktop}</div>} */}
        <BrowserOnly>{() => <DesktopToc />}</BrowserOnly>
      </div>
    </DocItemContext.Provider>
  );
}

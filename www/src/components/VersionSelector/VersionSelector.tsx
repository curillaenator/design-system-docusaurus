import { useContext, useState, useEffect, ReactNode } from 'react';
import { DocItemContext } from '../../services/docItemContext';

interface VersionSelectorProps {
  children: ReactNode;
  versionPages: {
    version: string;
    page: ReactNode;
  }[];
}

export const VersionSelector = (props: VersionSelectorProps) => {
  const { versionPages, children } = props;
  const { selectedVersion } = useContext(DocItemContext);

  const [Page, setPage] = useState<ReactNode>(null);

  useEffect(() => {
    if (!selectedVersion) return;

    const pageIndex = versionPages.findIndex((v) => v.version === selectedVersion);

    if (pageIndex === -1) {
      setPage(null);
      return;
    }

    setPage(versionPages[pageIndex].page);
  }, [versionPages, selectedVersion]);

  if (!Page) return children;

  return Page;
};

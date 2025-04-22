import React, { FC, useEffect, useContext } from 'react';
import { useWindowSize } from '@kit-base/uikit-utils';
import { Select } from '@kit-xyz/select';
import { Button } from '@kit-xyz/button';
import { ColorMode } from '@docusaurus/theme-common';
import Link from '@docusaurus/Link';

import { DocItemContext } from '../../../services/docItemContext';

import { ICONS_ASSOC } from '../assets/icons';

import styles from './footer.module.scss';

interface FooterProps {
  versions: string[];
  actualVersion: string;
  links: {
    title: string;
    link: string;
  }[];
  colorMode: ColorMode;
}

export const Footer: FC<FooterProps> = (props) => {
  const { actualVersion, versions, links, colorMode } = props;
  const { width } = useWindowSize();

  const { selectedVersion, setSelectedVersion } = useContext(DocItemContext);

  useEffect(() => {
    if (actualVersion && versions.length) {
      const index = versions.findIndex((v) => v === actualVersion);
      setSelectedVersion(versions[index]);
    }
  }, [actualVersion, versions, setSelectedVersion]);

  return (
    <div className={styles.footer}>
      {!!versions.length && (
        <Select
          items={versions.map((version) => ({ id: version, caption: `Версия ${version}` }))}
          value={selectedVersion}
          onChange={(itemId: string) => setSelectedVersion(itemId)}
          placement='bottom-start'
          fullWidth={width < 1280}
          colorMode={colorMode}
        />
      )}

      {!!links.length && (
        <div className={styles.contentLinks}>
          {links.map(({ link, title: linkTitle }) => (
            <Button
              key={linkTitle}
              to={link}
              component={Link}
              appearance='primary-transparent'
              size='xs'
              IconRight={() => ICONS_ASSOC[linkTitle]}
              colorMode={colorMode}
            >
              {linkTitle.slice(0, 1).toLocaleUpperCase() + linkTitle.slice(1)}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

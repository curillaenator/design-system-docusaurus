import React, { FC } from 'react';
import cn from 'classnames';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { Badge, BadgeProps } from '@kit-xyz/badge';
import { useColorMode } from '@docusaurus/theme-common';

import { CoverImage } from './components/CoverImage';
import { Footer } from './components/Footer';
import { useMeta } from './hooks/useMeta';
import { DocsHeaderProps } from './interfaces';
import styles from './styles/styles.module.scss';

export const DocsHeader: FC<DocsHeaderProps> = (props) => {
  const {
    title,
    description,
    copywriter,
    copywriterLink,
    designer,
    designerLink,
    developer,
    developerLink,
    headerImage,
    hasPadding = true,
    versions = [],
    actualVersion,
  } = props;

  const { colorMode } = useColorMode();
  const { links, badges } = useMeta(props);

  return (
    <header
      className={cn(styles.header, styles[colorMode], {
        [styles.header_withPadding]: hasPadding,
      })}
    >
      {headerImage && (
        <div className={styles.imageWrapper}>
          <CoverImage src={headerImage} />
        </div>
      )}

      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>

        <p className={styles.description}>{description}</p>

        {(designer || developer || copywriter) && (
          <div
            className={cn(styles.meta, {
              [styles.meta_mb]: !!badges.length,
            })}
          >
            {copywriter && (
              <div className={styles.metabadge}>
                <span className={styles.metatext}>Текст: </span>

                {!copywriterLink && <span className={cn(styles.metatext, styles.metalink)}>{copywriter}</span>}

                {copywriterLink && (
                  <a
                    className={cn(styles.metatext, styles.metalink)}
                    href={copywriterLink}
                    target='_blank'
                    rel='noreferrer'
                  >
                    {copywriter}
                  </a>
                )}
              </div>
            )}

            {designer && (
              <div className={styles.metabadge}>
                <span className={styles.metatext}>Дизайн: </span>
                {!designerLink && <span className={cn(styles.metatext, styles.metalink)}>{designer}</span>}

                {designerLink && (
                  <a
                    className={cn(styles.metatext, styles.metalink)}
                    href={designerLink}
                    target='_blank'
                    rel='noreferrer'
                  >
                    {designer}
                  </a>
                )}
              </div>
            )}

            {developer && (
              <div className={styles.metabadge}>
                <span className={styles.metatext}>Разработка: </span>

                {!developerLink && <span className={cn(styles.metatext, styles.metalink)}>{developer}</span>}

                {developerLink && (
                  <a
                    className={cn(styles.metatext, styles.metalink)}
                    href={developerLink}
                    target='_blank'
                    rel='noreferrer'
                  >
                    {developer}
                  </a>
                )}
              </div>
            )}
          </div>
        )}

        {!!badges.length && (
          <div className={cn(styles.badges)}>
            {badges.map(({ title: badgeTitle, appearance }) => (
              <Badge
                appearance={appearance as BadgeProps['appearance']}
                key={badgeTitle}
                colorMode={colorMode}
                withBorder
              >
                {badgeTitle}
              </Badge>
            ))}
          </div>
        )}
      </div>

      {(!!versions.length || !!links.length) && (
        <BrowserOnly>
          {() => <Footer actualVersion={actualVersion} versions={versions} links={links} colorMode={colorMode} />}
        </BrowserOnly>
      )}
    </header>
  );
};

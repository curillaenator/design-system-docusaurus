/* eslint-disable react/prop-types, react/no-unused-prop-types */
import React, { FC } from 'react';
import cn from 'classnames';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useThemeConfig, NavbarLogo } from '@docusaurus/theme-common';
// import ThemedImage from '@theme/ThemedImage';

import { WorksLogo } from './assets/WorksLogo';
import styles from './styles.module.scss';

interface LogoThemedImageProps {
  logo: NavbarLogo;
  alt: string;
  imageClassName: string;
}

const LogoThemedImage: FC<LogoThemedImageProps> = (props) => {
  const {
    // logo,
    // alt,
    imageClassName,
  } = props;

  // const sources = {
  //   light: useBaseUrl(logo.src),
  //   dark: useBaseUrl(logo.srcDark || logo.src),
  // };

  return (
    <div className={cn(styles.logoWrapper, imageClassName)}>
      <WorksLogo />
      {/* <ThemedImage
        className={logo.className}
        sources={sources}
        height={logo.height}
        width={logo.width}
        alt={alt}
        style={logo.style}
      /> */}
    </div>
  );
};

export default function Logo(props) {
  const { imageClassName, titleClassName, className, ...propsRest } = props;

  const {
    siteConfig: { title },
  } = useDocusaurusContext();

  const {
    navbar: { title: navbarTitle, logo },
  } = useThemeConfig();

  const logoLink = useBaseUrl(logo?.href || '/');

  // If visible title is shown, fallback alt text should be
  // an empty string to mark the logo as decorative.
  const fallbackAlt = navbarTitle ? '' : title;
  // Use logo alt text if provided (including empty string),
  // and provide a sensible fallback otherwise.
  const alt = logo?.alt ?? fallbackAlt;

  return (
    <Link
      to={logoLink}
      className={cn({
        [className]: !!className,
        [styles.navbar__brand]: className === 'navbar__brand',
      })}
      {...propsRest}
      {...(logo?.target && { target: logo.target })}
    >
      {logo && <LogoThemedImage logo={logo} alt={alt} imageClassName={imageClassName} />}

      {navbarTitle != null && <b className={titleClassName}>{navbarTitle}</b>}
    </Link>
  );
}

import React from 'react';
import DocItemTOCMobile from '@theme/DocItem/TOC/Mobile';
import DocItemTOCDesktop from '@theme/DocItem/TOC/Desktop';
import { useDoc } from '@docusaurus/theme-common/internal';

// Decide if the toc should be rendered, on mobile or desktop viewports
export const useDocTOC = () => {
  const { frontMatter, toc } = useDoc();
  // const windowSize = useWindowSize();

  const hidden = frontMatter.hide_table_of_contents;
  const canRenderDesktop = !hidden && toc.length > 0;
  const canRenderMobile = !hidden && toc.length > 0;

  // const desktop = canRender && (windowSize === 'desktop' || windowSize === 'ssr') ? <DocItemTOCDesktop /> : null;
  const desktop = canRenderDesktop ? <DocItemTOCDesktop /> : null;
  const mobile = canRenderMobile ? <DocItemTOCMobile /> : null;

  return {
    hidden,
    mobile,
    desktop,
    frontMatter,
  };
};

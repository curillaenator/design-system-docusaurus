import { IconStore } from '@kit-xyz/icon/src/store/index';

export const IconSetsText = Object.keys(IconStore)
  .map((sectionName) => {
    const lines = [];
    lines.push(`<section id="${sectionName}">`);
    lines.push(...Object.keys(IconStore[sectionName]).map((IconName) => `  <${IconName} />`));

    lines.push('</section>');

    return lines.join('\n');
  })
  .join('\n\n\n');

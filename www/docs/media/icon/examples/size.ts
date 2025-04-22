import { IconProps } from '@site/packages/xyz/Icon';
import SOURCE_JSON from '@kit-xyz/theme/src/dist/XYZ.json';

const sizeData = SOURCE_JSON.values.icon['icon/scale'].width;

const sizes = Object.keys(sizeData) as IconProps['size'][];

export const ICON_SIZES: (IconProps & { code: string; title: string; subtitle: string; exampleCodeJSON: string })[] =
  sizes.map((size) => ({
    title: size,
    subtitle: `size: ${sizeData[size].value}`,
    size,
    exampleCodeJSON: JSON.stringify(SOURCE_JSON.values.icon[`icon/scale`].width[size], null, 4),
    code: `<HomeIcon color="${size}" />`,
  }));

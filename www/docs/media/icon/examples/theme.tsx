import React from 'react';
import { IconProps } from '@site/packages/xyz/Icon';
import THEME_JSON from '@kit-xyz/theme/src/dist/XYZ.json';
import SOURCE_JSON from '@kit-xyz/theme/src/source/XYZ.json';
import { CardProps } from '@site/www/src/components/Card/interfaces';
import { ExampleProps } from '@site/www/src/components/ExamplesGrid/Example';

const colorDark = THEME_JSON.values.icon['icon/theme/dark'];

const colors = Object.keys(colorDark).map((value) => value.split('/')[1]) as IconProps['color'][];

export type IconThemeProps = IconProps & {
  code: string;
  title: string;
  subtitleGenerator: CardProps['subtitleGenerator'];
  JSONGenerator: ExampleProps['JSONGenerator'];
};

const numberRegexp = /\D/g;

const getRgbValue = (value: string): [number, number, number] =>
  // @ts-ignore
  value.split(',').map((v) => v.replaceAll(numberRegexp, ''));
export const ICON_COLORS: IconThemeProps[] = colors.map((v) => ({
  title: v,
  color: v,
  JSONGenerator: ({ colorMode }) => {
    const value = SOURCE_JSON.values.icon[`icon/theme/${colorMode}`][`color/${v}`];

    return <div>{JSON.stringify(value, null, 4)}</div>;
  },
  subtitleGenerator: ({ colorMode }) => {
    const { value } = THEME_JSON.values.icon[`icon/theme/${colorMode}`][`color/${v}`];
    const rgb = getRgbValue(value);
    const hex = rgb.map((c) => (+c).toString(16).padStart(2, '0').toUpperCase());

    return [`HEX: #${hex.join('')}`, `RGB: ${rgb.join(' ')}`];
  },
  code: `<HomeIcon color="${v}" />`,
}));

import React, { FC, CSSProperties } from 'react';
import { useViewportContext } from '@site/src/components/DocViewport';
import TOKENS_SOURCE from '@kit-xyz/theme/src/dist/XYZ.json';

import type { ShadowToken, ShadowValueProps } from '../interfaces';

import styles from './shadow.module.scss';

const TOKENS = TOKENS_SOURCE.values.style['shadow'] as Record<string, { value: ShadowToken; type: string }>;

const modes: Record<string, string> = {
  light: 'dark',
  dark: 'light',
  color: 'light',
};

const px = (value: string) => (value.includes('px') ? value : `${value}px`);

const makeStyle = (shadowToken: ShadowToken): CSSProperties => {
  const { color, x, y, blur, spread } = shadowToken;
  return { boxShadow: `${px(x)} ${px(y)} ${px(blur)} ${px(spread)} ${color}` };
};

export const Shadow: FC<ShadowValueProps> = (props) => {
  const { color, size, style, shadowName } = props;
  const { colorMode } = useViewportContext();

  if (!shadowName && !color && !size) return <div className={styles.value} style={style} />;

  if (shadowName)
    return (
      <div
        className={styles.value}
        style={{
          ...style,
          ...makeStyle(TOKENS[shadowName].value),
        }}
      />
    );

  const modedShadowName = `${color}-${modes[colorMode]}-${size}`;

  return (
    <div
      className={styles.value}
      style={{
        ...style,
        ...makeStyle(TOKENS[modedShadowName].value),
      }}
    />
  );
};

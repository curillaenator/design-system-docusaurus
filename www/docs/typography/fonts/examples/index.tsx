import React, { FC, CSSProperties } from 'react';

import styles from './styles.module.scss';

interface FontPresetToken {
  type: string;
  value: {
    fontFamily: string;
    fontWeight: string;
    lineHeight: string;
    fontSize: string;
    letterSpacing: string;
    paragraphSpacing: string;
    paragraphIndent: string;
    textCase: CSSProperties['textTransform'];
    textDecoration: string;
  };
}

interface FontviewProps {
  fontFamily: Record<string, Record<string, FontPresetToken>>;
}

const convertLetterSpacing = (lts: string) => {
  if (lts.includes('%')) {
    return `${16 * (parseInt(lts, 10) / 100)}px`;
  }

  console.log(lts);
};

export const Fontview: FC<FontviewProps> = ({ fontFamily }) => (
  <div className={styles.fontview}>
    {Object.entries(fontFamily).map(([fontSize, fontTypes]) => (
      <div key={fontSize} className={styles.block}>
        <span className={styles.title}>{`Font-size ${fontSize}`}</span>

        <div className={styles.fontsizes}>
          {Object.entries(fontTypes).map(([fontType, token]) => (
            <span
              key={`${fontSize}-${fontType}`}
              className={styles.font}
              style={{
                ...token.value,
                letterSpacing: convertLetterSpacing(token.value.letterSpacing),
                textTransform: token.value.textCase,
                fontWeight: Number(token.value.fontWeight),
              }}
            >{`font-size-${fontSize}/${fontType}`}</span>
          ))}
        </div>
      </div>
    ))}
  </div>
);

import React from 'react';
import JSON_SOURCE from '@kit-xyz/theme/src/dist/XYZ.json';
import { makeColorValues } from '@site/shared/docsUtils';

import { CardProps } from '../interfaces';

import { Color } from './components/Color';

const COLOR_TOKENS = JSON_SOURCE.values.style.color;

const COLOR_NAMES = [
  'neutral',
  'accent-1',
  'accent-2',
  'primary',
  'informative',
  'secondary',
  'positive',
  'attention',
  'negative',
];

const reKEY = /^.*-[1-9]00$/;

export const COLORS: Record<string, CardProps[]> = Object.fromEntries(
  COLOR_NAMES.map((name) => {
    const current = [];

    for (const key in COLOR_TOKENS) {
      if (key.includes(name) && reKEY.test(key)) {
        current.push({
          id: COLOR_TOKENS[key].value,
          title: key.slice(0, 1).toUpperCase() + key.slice(1),
          subtitles: makeColorValues(COLOR_TOKENS[key].value),
          name: `color/${key}`,
          children: (
            <Color
              colorName={key}
              style={{
                backgroundColor: COLOR_TOKENS[key].value,
              }}
            />
          ),
        });
      }
    }

    return [name, current];
  }),
);

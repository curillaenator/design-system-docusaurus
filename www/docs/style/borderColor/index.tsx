import React from 'react';
import JSON_SOURCE from '@kit-xyz/theme/src/dist/XYZ.json';
import { makeColorValues } from '@site/shared/docsUtils';

import { CardProps } from '../interfaces';

import { Color } from './components/Color';

const TOKENS = JSON_SOURCE.values.style['border-color'] as Record<string, { value: string; type: string }>;

const groupTokens = (): Record<string, CardProps[]> => {
  const groups = {} as Record<string, CardProps[]>;

  Object.entries(TOKENS).forEach(([key, token]) => {
    const groupName = key.replace(/-\d00$/, '');

    if (!groups[groupName]) groups[groupName] = [];

    groups[groupName].push({
      id: token.value,
      title: key.slice(0, 1).toUpperCase() + key.slice(1),
      subtitles: makeColorValues(token.value),
      children: (
        <Color
          colorName={key}
          style={{
            backgroundColor: TOKENS[key].value,
          }}
        />
      ),
    });
  });

  return groups;
};

const makeSectionCodeExamples = () => {
  const groups = {};

  Object.entries(TOKENS).forEach(([key, token]) => {
    const groupName = key.replace(/-\d00$/, '');
    if (!groups[groupName]) groups[groupName] = {};
    groups[groupName][key] = token;
  });

  Object.keys(groups).forEach((groupKey) => {
    groups[groupKey] = JSON.stringify(groups[groupKey], null, 1);
  });

  return groups;
};

export const COLORS = groupTokens();
export const CODEBLOCKS = makeSectionCodeExamples();

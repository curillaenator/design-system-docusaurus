import { CssvCollector } from '../../operations/convertTokensToSass/service/CssvCollector';

const groupVariablesExpected = {
  radio: {
    'theme-name': {
      '--radio-state-warning-background': 'rgba(0, 0, 0, 0)',
      '--radio-state-error-text-general': 'rgb(23, 23, 23)',
      '--radio-state-error-text-additional': 'rgba(23, 23, 23, 0.6)',
      '--radio-state-error-glyph-general': 'rgb(239, 68, 68)',
    },
  },
  scroll: {
    'theme-name-2': {
      '--scroll-color-light-thumb': 'rgb(245, 245, 245)',
      '--scroll-color-light-thumb-hovered': 'rgb(99, 102, 241)',
      '--scroll-color-light-track': 'rgba(245, 245, 245, 0.2)',
      '--scroll-color-light-track-hovered': 'rgba(99, 102, 241, 0.2)',
      '--scroll-state-disabled-thumb': 'rgba(163, 163, 163, 0.2)',
    },
  },
  tooltip: {
    'theme-name': {
      '--tooltip-color-dark-solid-action': 'rgba(245, 245, 245, 0.6)',
      '--tooltip-color-dark-solid-action-focused': 'rgb(245, 245, 245)',
      '--tooltip-color-dark-solid-action-hovered': 'rgb(245, 245, 245)',
      '--tooltip-color-dark-solid-action-background': 'rgba(0, 0, 0, 0)',
      '--tooltip-color-dark-solid-background': 'rgb(23, 23, 23)',
    },
  },
};

const allVariablesExpected = {
  'theme-name': {
    '--radio-state-warning-background': 'rgba(0, 0, 0, 0)',
    '--radio-state-error-text-general': 'rgb(23, 23, 23)',
    '--radio-state-error-text-additional': 'rgba(23, 23, 23, 0.6)',
    '--radio-state-error-glyph-general': 'rgb(239, 68, 68)',
    '--tooltip-color-dark-solid-action': 'rgba(245, 245, 245, 0.6)',
    '--tooltip-color-dark-solid-action-focused': 'rgb(245, 245, 245)',
    '--tooltip-color-dark-solid-action-hovered': 'rgb(245, 245, 245)',
    '--tooltip-color-dark-solid-action-background': 'rgba(0, 0, 0, 0)',
    '--tooltip-color-dark-solid-background': 'rgb(23, 23, 23)',
  },
  'theme-name-2': {
    '--scroll-color-light-thumb': 'rgb(245, 245, 245)',
    '--scroll-color-light-thumb-hovered': 'rgb(99, 102, 241)',
    '--scroll-color-light-track': 'rgba(245, 245, 245, 0.2)',
    '--scroll-color-light-track-hovered': 'rgba(99, 102, 241, 0.2)',
    '--scroll-state-disabled-thumb': 'rgba(163, 163, 163, 0.2)',
  },
};
const testData = [
  {
    groupName: 'radio',
    theme: 'theme-name',
    values: ['rgba(0, 0, 0, 0)', 'rgb(23, 23, 23)', 'rgba(23, 23, 23, 0.6)', 'rgb(239, 68, 68)'],
    keys: [
      '--radio-state-warning-background',
      '--radio-state-error-text-general',
      '--radio-state-error-text-additional',
      '--radio-state-error-glyph-general',
    ],
  },
  {
    groupName: 'scroll',
    theme: 'theme-name-2',
    values: [
      'rgb(245, 245, 245)',
      'rgb(99, 102, 241)',
      'rgba(245, 245, 245, 0.2)',
      'rgba(99, 102, 241, 0.2)',
      'rgba(163, 163, 163, 0.2)',
    ],
    keys: [
      '--scroll-color-light-thumb',
      '--scroll-color-light-thumb-hovered',
      '--scroll-color-light-track',
      '--scroll-color-light-track-hovered',
      '--scroll-state-disabled-thumb',
    ],
  },
  {
    groupName: 'tooltip',
    theme: 'theme-name',
    values: [
      'rgba(245, 245, 245, 0.6)',
      'rgb(245, 245, 245)',
      'rgb(245, 245, 245)',
      'rgba(0, 0, 0, 0)',
      'rgb(23, 23, 23)',
    ],
    keys: [
      '--tooltip-color-dark-solid-action',
      '--tooltip-color-dark-solid-action-focused',
      '--tooltip-color-dark-solid-action-hovered',
      '--tooltip-color-dark-solid-action-background',
      '--tooltip-color-dark-solid-background',
    ],
  },
];

describe('helpers#cssvCollector', () => {
  const { addVariable, getVariablesByGroups, getAllVariables } = new CssvCollector();
  testData.forEach(({ groupName, theme, values, keys }) => {
    keys.forEach((key, index) => {
      addVariable(groupName, `${theme}.${key}`, values[index]);
    });
  });
  it('should collect group variables correctly', () => {
    expect(getVariablesByGroups()).toEqual(groupVariablesExpected);
  });
  it('should collect all variables correctly', () => {
    expect(getAllVariables()).toEqual(allVariablesExpected);
  });
});

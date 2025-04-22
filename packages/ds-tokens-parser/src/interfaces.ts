import { CssvDictionaryType } from './operations/convertTokensToSass/interfaces';
import { CssvCollector } from './operations/convertTokensToSass/service/CssvCollector';

export type ComponentsAssocType = Record<string, string>;

export type OptionsType = {
  groups: string[];
  escapeSymbols: string[];

  /** место сохранение нормализованных значений темы */
  destination: string;

  /** хранилище переменных */
  cssvCollector: CssvCollector;

  groupsAssoc?: Record<string, string>;
  cssvDict?: CssvDictionaryType;
  cssvSkip?: string[];
  withCssv?: boolean;
};

export type ProcessedSassToken = Record<string, string>;
export type ProcessedSassSubGroup = Record<string, ProcessedSassToken>;
export type ProcessedSassGroup = Record<string, ProcessedSassSubGroup>;
export type ProcessedComponent = Record<string, ProcessedSassGroup>;

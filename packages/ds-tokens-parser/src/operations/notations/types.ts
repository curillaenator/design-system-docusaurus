import { Dictionary } from '../../types/common';

export type Variations = {
  tokenNames: string[];
  schemaNames: string[];
};

export type CollectUniqNamesOptions = {
  variatedNames: string[];
  variationsAssoc: string[];
  existingNames: Dictionary;
};

export type ExistingNotations = {
  componentNames: Dictionary;
  schemaNames: Dictionary;
  tokenNames: Dictionary;
};

export type ResolveTokenNamesOptions = {
  /** источник токенов */
  src: string;
  /** путь сохранения словарей */
  dist: string;
  variationsAssoc?: Variations;
  /** пропускаемые компоненты */
  skipAssoc?: Record<string, boolean>;
  /** существующие вариации */
  existingNotations?: ExistingNotations;
};

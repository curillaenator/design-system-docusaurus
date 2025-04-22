import { NormalToken, OriginalToken, TypographyToken, TypographyValue } from '../../types/tokens';

/**
 * Тип описывающий структуру словарей необходимых для работы сжимания названия переменных
 */
export type CssvDictionaryType = {
  schemaNames: Record<string, string>;
  tokenNames: Record<string, string>;
};

/**
 * Описывает расположение токена в теме ()
 */
type PathPartsBase = {
  /**
   * Название раздела токенов. Как правило, это или название компонента (например: avatar), или какой-либо абстрактный раздел (например: style)
   */
  groupName: string;
  /**
   * Название подраздела для хранения нескольких токенов.
   * Имеет несколько вариантов значения:
   * 1. В секции scale это семантическое название параметра (например: height, glyph-border-width)
   * 2. В секции style абстрактное название группы параметров
   * 3. В theme абстрактное название вариации элемента
   */
  schemeName?: string;
  /**
   * Название ключа ответственного за хранение значения токена.
   * Имеет несколько вариантов значения:
   * 1. В секции scale это название конкретной вариации (например: 2xl, xl)
   * 2. В секции style название конкретного параметра (например: font-family)
   * 3. В theme название конкретного семантического параметра темы (например: content-general, content-additional)
   */
  tokenName: string;
};

/**
 * Некоторые токены так же имеют и тему в описании (например: light, dark)
 */
type PathPartsTheme = {
  themeName: string;
} & PathPartsBase;

/**
 * Другие токены содержат просто секции вместо темы (например: light, dark). Они обрабатываются немного по-разному, но главное отличие: токены из темы обрабатываются как конфигурируемые переменные
 */
type PathPartsSection = {
  sectionName: string;
} & PathPartsBase;

export type PathParts = PathPartsSection | PathPartsTheme;

/**
 * Абстрактный тип описывающий объект обрабатываемый в процессе работы скрипта. В зависимости от этапа обработки Token может быть разным
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TokenDescriptionAbstract<Token extends any> = {
  originalPath: string[];
  path: PathParts;
  token: Token;
};

/**
 * Итоговое значение токена которое будет использоваться для записи
 */
export type FinalToken = string | TypographyValue;

/** Описание токена полученного из файла темы (до обработки пути к токену) */
export type TokenDescriptionOriginalWithoutPath = Omit<TokenDescriptionOriginal, 'path'>;

/** Описание токена полученного из файла темы (после обработки пути к токену) */
export type TokenDescriptionOriginal = TokenDescriptionAbstract<OriginalToken>;

/** Описание токена после первичной обработки (как типографии, так и обычного) */
export type TokenDescriptionOriginalToken = TokenDescriptionAbstract<OriginalToken>;

/** Описание токена типографии после обработки  */
export type TokenDescriptionParsedTypography = TokenDescriptionAbstract<TypographyToken>;

/** Описание обычного токена после обработки */
export type TokenDescriptionParsedNormalToken = TokenDescriptionAbstract<NormalToken>;

/** Описание любого токена после обработки */
export type TokenDescriptionParsedToken = TokenDescriptionParsedTypography | TokenDescriptionParsedNormalToken;

/** Описание обычного токена для последующей записи в файл */
export type TokenDescriptionFinal = TokenDescriptionAbstract<FinalToken>;

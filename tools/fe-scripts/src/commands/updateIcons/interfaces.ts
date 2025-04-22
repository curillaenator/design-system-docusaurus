import { FigmaElement } from './sources/figma/responces.interface';

export interface IconInfo {
  /** ид иконки (используется для загрузки) */
  id: string;
  /** название иконки */
  iconName: string;
  /** название типа иконки (solid | duotone) */
  typeName: string;
  /** название компонента иконки */
  componentName: string;

  /** название иконки для ключа в Map (kebab-case) */
//  iconMapKey: string;
  /** название используемое для отчетов {sectionName} {iconName} */
  fullName: string;

  /** путь по которому сохранят иконку (проще рассчитать заранее, так как используется сразу в нескольких местах) */
  targetPath: string;
  /** путь по которому загружают иконку */
  originSvgPath: string;
  /** путь по которому складывают промежуточную иконку в tsx */
  originTSXPath: string;

  /** изначальный фигма элемент  */
  origin: FigmaElement;

  /** ссылка на оригинал иконку (только для дубликатов) */
  link?: IconInfo;
}

export interface SectionInfo {
  section: FigmaElement;
  path: string;
}

/** техническая конфигурация */
export type BaseConfig = {
  /** путь до хранения временных файлов */
  tempPath: string;
  /** путь до файла с отчетом */
  reportPath: string;
  /** список регулярок для удаления из иконок мусора */
  clearIcon: RegExp[];
  /** число одновременно скачиваемых иконок */
  chunkSize: number;
  /** размер ожидания для предотвращения блокировки от фигмы */
  sleep: number;
  /** иконка используемая как заглшка, когда не отвечает сервера фигмы */
  fallBackIcon: string;

  /** описание правил какие иконки мы не будем использовать */
  filter: Record<string, string[]>;
  /** Правила преобразования скаченных иконок */
  transformIcon: Record<string, string>;
}

/** конфигурация для конкретного проекта */
export type ImportConfig = {
  /** файл откуда происходит загрузка иконок (первая часть в урле фигмы с дизайнм) */
  file: string;
  /** токен для авторизации */
  token: string;
  /** элементы которые мы не посредственно опрашиваем (обычно последняя часть урла фигмы с дизайном) */
  nodes: string[];

  /** путь до пакета в который мы помещаем иконки */
  packagePath: string;
  /** путь до пакета в который мы помещаем актуальные иконки */
  targetIconsPath: string;
  /** путь до файла в котором будет список всех актуальных иконок */
  targetPathMap: string;

  /** путь до пакета в который мы помещаем deprecated иконки */
  deprecatedIconsPath: string;
  /** путь до файла в котором будет список всех deprecated иконок */
  deprecatedPathMap: string;
} & BaseConfig;
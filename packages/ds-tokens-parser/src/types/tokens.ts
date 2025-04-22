import { addPrefixToObject } from './utils';

export type ComponentName = string;
export type VariantName = string;
type ParameterName = string;
type TokenValueType =
  | 'borderRadius'
  | 'borderWidth'
  | 'boxShadow'
  | 'color'
  | 'fontFamilies'
  | 'fontSizes'
  | 'fontWeights'
  | 'gradient'
  | 'letterSpacing'
  | 'lineHeights'
  | 'opacity'
  | 'other'
  | 'palette'
  | 'paragraphSpacing'
  | 'sizing'
  | 'textCase'
  | 'textDecoration';

export type TypographyValue = {
  fontFamily: string;
  textCase: string;
  textDecoration: string;
  fontWeight: string;
  fontSize: string;
  letterSpacing: string;
  lineHeight: string;
  paragraphSpacing: string;
};

export type TypographyToken = {
  value: TypographyValue;
  type: 'typography';
  varName?: string;
};

export type NormalToken = {
  value: string;
  type: TokenValueType;
  varName?: string;
};

export type OriginalToken = NormalToken | TypographyToken;
export type SchemeConfig = Record<VariantName, OriginalToken>;
export type ThemeConfig = Record<ParameterName, SchemeConfig>;
export type DirtyConfig = Record<ParameterName, SchemeConfig | OriginalToken>; // конфиг со смешиванием уровней например typography - text/scale

export type ComponentConfig<TComponentName extends ComponentName = 'test'> = Partial<
  addPrefixToObject<
    {
      '/scale': ThemeConfig;
      '/style': ThemeConfig;
      [key: string]: ThemeConfig;
    },
    TComponentName
  >
> & {
  [key: string]: SchemeConfig | DirtyConfig;
};

export type TokensConfig = {
  [TKey in ComponentName]: ComponentConfig<TKey>;
} & {
  media?: ComponentConfig<'glyph'>;
};

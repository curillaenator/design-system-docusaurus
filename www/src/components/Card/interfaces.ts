export type ColorMode = 'light' | 'dark' | 'color';

export type SubtitleGeneratorProps = {
  colorMode: ColorMode;
};

export interface CardProps {
  title: string;
  subtitles?: string[];
  subtitleGenerator?: (SubtitleGeneratorProps) => string[];
  colorMode?: ColorMode;
}

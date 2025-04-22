import { BaseTypographyProps } from '../interfaces';

export type UseTypographyProps = Omit<BaseTypographyProps, 'dataTestId' | 'children' | 'title' | 'lang' | 'as'>;

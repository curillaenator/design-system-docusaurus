import { useRef, useEffect } from 'react';
import cn from 'classnames';

import { RADIUSES_ASSOC } from '../constants';
import type { PaperProps } from '../interfaces';
import styles from '../paper.module.scss';

export const usePaperProps = (props: PaperProps) => {
  const {
    component = 'div',
    smoothedCorners = false,
    fullwidth = false,
    dropShadow = false,
    withBorder = false,
    borderRadius = 'xl',
    borderWidth = 'none',
    padding = '2xl',
    shape = 'rounded',
    backgroungGradient,
    appearance = 'solid',
    colorMode = 'light',
    interactive = false,
    color,
    className,
    noPointerEvents = true,
    style = {},
    ...rest
  } = props;

  const renderSmoothed = shape === 'rounded' && borderRadius !== 'none' && smoothedCorners;

  const cornersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (style.backgroundColor) {
      cornersRef.current?.style.setProperty('--shp-bgc', `${style.backgroundColor}`);
    }

    if (!renderSmoothed) {
      cornersRef.current?.style.setProperty('--ppr-bdrs', `${RADIUSES_ASSOC[borderRadius]}px`);
    } else {
      cornersRef.current?.style.setProperty('--ppr-bdrs', `${(RADIUSES_ASSOC[borderRadius] + 3) * 1.25}px`);
    }
  }, [borderRadius, renderSmoothed, style.backgroundColor]);

  return {
    ...rest,
    component,
    renderSmoothed,
    borderRadius,
    borderWidth,
    withBorder,
    style,

    wrapperClassName: cn(styles.paper, styles[`_size_${padding}`], styles[`_bdrs_${borderRadius}`], className, {
      [styles.paper_withBorder]: withBorder,
      [styles.paper_interactive]: (interactive || component !== 'div') && withBorder,
      [styles[`_bdw_${borderWidth}`]]: withBorder,
      [styles.paper_fullwidth]: fullwidth,

      [styles[`_color-${appearance}_${colorMode}`]]: !color,
      [styles[`_bgc_${color}`]]: !style.backgroundColor && color,

      [styles.paper_smoothedCorners]: renderSmoothed,
      [styles._shape_rounded]: renderSmoothed,
      [styles.paper_smoothedCornersBorder]: renderSmoothed && withBorder,
      [styles.paper_smoothedCornersShadow]: renderSmoothed && dropShadow,

      [styles.paper_solid]: !backgroungGradient,
      [styles.paper_gradient]: !!backgroungGradient,

      [styles[`_shape_${shape}`]]: !renderSmoothed,
      [styles.paper_defaultCornersShadow]: !renderSmoothed && !withBorder && dropShadow,
      [styles.paper_defaultCornersBorder]: !renderSmoothed && !dropShadow && withBorder,
      [styles.paper_defaultCornersShadowAndBorder]: !renderSmoothed && withBorder && dropShadow,
    }),

    shapeClassName: cn({
      [styles.noEvents]: noPointerEvents,
      [styles.shape]: !style.backgroundColor && !color,
    }),

    cornersRef,
  };
};

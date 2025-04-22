import React, { FC } from 'react';

import styles from './cover-image.module.scss';

interface CoverImageProps {
  src: string;
  srcSize?: string;
  isBlur?: boolean;
  isGrid?: boolean;
}

export const CoverImage: FC<CoverImageProps> = (props) => {
  const { src, srcSize, isBlur = true, isGrid = true } = props;

  return (
    <div className={styles.background}>
      <svg width='100%' height='100%' viewBox='0 0 768 768' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <defs>
          <radialGradient
            id='cover-image-grid-gradient'
            cx='0'
            cy='0'
            r='1'
            gradientUnits='userSpaceOnUse'
            gradientTransform='translate(384 384) rotate(90) scale(384)'
          >
            <stop stopColor='white' stopOpacity='1' />
            <stop offset='1' stopColor='white' stopOpacity='0' />
          </radialGradient>

          <radialGradient
            id='cover-image-blur-gradient'
            cx='0'
            cy='0'
            r='1'
            gradientUnits='userSpaceOnUse'
            gradientTransform='translate(384 384) rotate(90) scale(384)'
          >
            <stop offset='60%' stopColor='white' stopOpacity='1' />
            <stop offset='80%' stopColor='white' stopOpacity='0.8' />
            <stop offset='100%' stopColor='white' stopOpacity='0' />
          </radialGradient>

          <filter
            id='cover-image-circle-blur'
            x='0'
            y='0'
            width='768'
            height='768'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'
          >
            <feGaussianBlur in='SourceGraphic' stdDeviation='128' />
          </filter>
        </defs>

        <mask
          id='cover-image-grid-mask'
          maskUnits='userSpaceOnUse'
          x='0'
          y='0'
          width='768'
          height='768'
          style={{ maskType: 'alpha' }}
        >
          <circle cx='384' cy='384' r='384' fill='url(#cover-image-grid-gradient)' />
        </mask>

        <mask
          id='cover-image-blur-mask'
          maskUnits='userSpaceOnUse'
          x='0'
          y='0'
          width='768'
          height='768'
          style={{ maskType: 'alpha' }}
        >
          <circle cx='384' cy='384' r='384' fill='url(#cover-image-blur-gradient)' />
        </mask>

        {isGrid && (
          <g mask='url(#cover-image-grid-mask)'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M768 129H0V127H768V129ZM768 385H0V383H768V385ZM768 641H0V639H768V641ZM0 513H768V511H0V513ZM0 257H768V255H0V257Z'
              fill='var(--ifm-color-emphasis-500)'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M129 0V768H127V0H129ZM385 0V768H383V0H385ZM257 768V0H255V768H257ZM513 0V768H511V0H513ZM641 768V0H639V768H641Z'
              fill='var(--ifm-color-emphasis-500)'
            />
          </g>
        )}

        {isBlur && (
          <g mask='url(#cover-image-blur-mask)'>
            <circle cx={384} cy={384} r={192} fill='var(--color-accent-1-700)' filter='url(#cover-image-circle-blur)' />
          </g>
        )}
      </svg>

      {src && <img src={src} alt='docHeaderImage' style={{ height: srcSize }} />}
    </div>
  );
};

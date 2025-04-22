import React, { FC, ReactNode, CSSProperties } from 'react';
import cn from 'classnames';
import { Button } from '@kit-xyz/button';
import { Paper } from '@kit-xyz/paper';
// import { Corners } from '@kit-base/shape';
import { Props } from '@theme/CodeBlock';
import { useViewportContext } from '@site/src/components/DocViewport';
import { ColorMode } from '@site/www/src/components/Card/interfaces';

import { icons } from './icons';
import styles from './example.module.scss';

export type GeneratorProps = {
  colorMode: ColorMode;
};
export type CodeGenerator = (GeneratorProps) => string;

export interface ExampleProps {
  children: ReactNode;
  exampleCodeJSX?: string | CodeGenerator;
  exampleCodeJSON?: string | CodeGenerator;
  viewMode?: 'transparent' | 'paper';
  colorMode?: ColorMode;
  style?: CSSProperties;
  language?: Props['language'];
  smoothedCorners?: boolean;
}

const processCode = (code: string | CodeGenerator, data: GeneratorProps) => {
  if (typeof code === 'function') return code(data);
  return code;
};

export const Example: FC<ExampleProps> = (props) => {
  const {
    children,
    viewMode = 'paper',
    exampleCodeJSX,
    exampleCodeJSON,
    colorMode: externalColorMode,
    style,
    smoothedCorners = false,
  } = props;

  const { colorMode: internalColorMode, selectCodeBlock } = useViewportContext();
  const colorMode = externalColorMode || internalColorMode;

  const exampleJSX = processCode(exampleCodeJSX, { colorMode });
  const exampleJSON = processCode(exampleCodeJSON, { colorMode });

  const smoothed = smoothedCorners && viewMode === 'paper';

  return (
    <Paper
      padding={viewMode === 'paper' ? 'xl' : 'none'}
      colorMode={colorMode}
      fullwidth
      borderRadius={viewMode === 'paper' ? 'xl' : 'none'}
      smoothedCorners={smoothed}
      className={cn(styles.example, {
        [styles[`example_smoothedCorners`]]: smoothed,
      })}
      style={style}
    >
      {/* {smoothed && <Corners borderRadius={24} className={styles.shape} />} */}

      <div className={styles.content}>{children}</div>

      {(exampleJSX || exampleJSON) && (
        <div className={styles.buttons}>
          {exampleJSX && (
            <Button
              size='xs'
              colorMode={colorMode}
              appearance='primary-solid-alt'
              onClick={() => selectCodeBlock(exampleJSX, children)}
              IconRight={icons.code}
            />
          )}
          {exampleJSON && (
            <Button
              size='xs'
              colorMode={colorMode}
              appearance='primary-solid-alt'
              onClick={() => selectCodeBlock(exampleJSON, children)}
              IconRight={icons.json}
            />
          )}
        </div>
      )}
    </Paper>
  );
};

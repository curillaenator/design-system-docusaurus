import React, { FC, ReactNode, useState, useCallback, useMemo } from 'react';
import cn from 'classnames';
import CodeBlock from '@theme/CodeBlock';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { ColorModeToggle } from '@site/src/components/ColorModeToggle';
import { Button } from '@kit-xyz/button';
import { DOCUSAURUS_VIEWPORT_MODAL_PORTAL_ID } from '@site/shared/constants';

import { useLocalColorMode } from './hooks/useLocalColorMode';
import { ViewportContext } from './context';
import { icons } from './icons';
import type { DocViewportProps } from './interfaces';
import styles from './styles.module.scss';

export const DocViewport: FC<DocViewportProps> = (props) => {
  const { modes = ['light', 'dark'], codeBlock, language = 'jsx', children } = props;

  const { globalColorMode, localColorMode, handleLocalColorMode } = useLocalColorMode();

  const [open, setOpen] = useState<boolean>(false);
  const [component, setComponent] = useState<ReactNode>(null);
  const [code, setCode] = useState<ReactNode>(null);

  const onOpen = useCallback(() => {
    if (codeBlock) {
      setComponent(null);
      setCode(codeBlock);
    }
    setOpen(true);
  }, [codeBlock]);

  const onClose = useCallback(() => setOpen(false), []);

  const selectCodeBlock = useCallback((newCodeBlock: ReactNode, newComponent: ReactNode) => {
    if (newComponent) setComponent(newComponent);
    setCode(newCodeBlock);
    setOpen(true);
  }, []);

  const contextValue = useMemo(
    () => ({
      colorMode: localColorMode,
      selectCodeBlock,
    }),
    [localColorMode, selectCodeBlock],
  );

  return (
    <ViewportContext.Provider value={contextValue}>
      <div className={cn(styles.viewport)}>
        {(!!codeBlock || !!modes.length) && (
          <div className={styles.settings}>
            {!!codeBlock && (
              <Button
                size='xs'
                appearance='primary-solid'
                onClick={onOpen}
                colorMode={globalColorMode}
                IconLeft={language === 'json' ? () => icons.json : () => icons.code}
              >
                Код секции
              </Button>
            )}

            {!!modes.length && (
              <ColorModeToggle
                globalValue={globalColorMode}
                value={localColorMode}
                onChange={handleLocalColorMode}
                modes={modes}
              />
            )}
          </div>
        )}

        <div className={styles.screen}>{children}</div>
      </div>

      <BrowserOnly>
        {() => {
          const { Modal } = require('@site/src/components/Modal'); // eslint-disable-line global-require

          return (
            <Modal open={open} onClose={onClose} portalId={DOCUSAURUS_VIEWPORT_MODAL_PORTAL_ID}>
              <div className={styles.previewWrapper}>
                {component && (
                  <div className={cn(styles.preview, styles[`preview_${localColorMode}`])}>{component}</div>
                )}
                <CodeBlock language={language}>{code}</CodeBlock>
              </div>
            </Modal>
          );
        }}
      </BrowserOnly>
    </ViewportContext.Provider>
  );
};

import React, { FC } from 'react';
import { AccordionSection as Accordion, AccordionProps } from '@kit-xyz/accordion';
import { Paper } from '@kit-xyz/paper';
import { useViewportContext } from '@site/src/components/DocViewport';
import styles from '@site/src/components/Card/display.module.scss';

const content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, ab?';

export const AccordionSection: FC<AccordionProps> = (props) => {
  const { colorMode } = useViewportContext() as { colorMode: 'light' | 'dark' | 'color' };

  return (
    <Paper
      colorMode={colorMode}
      fullwidth
      appearance='solid-alt'
      borderRadius='l'
      padding='xl'
      className={styles.paper}
    >
      <Accordion {...props} colorMode={colorMode}>
        <h3>Content</h3>

        <span>{content.repeat(5)}</span>
      </Accordion>
    </Paper>
  );
};

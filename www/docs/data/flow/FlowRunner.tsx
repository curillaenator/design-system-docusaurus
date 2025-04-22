import React, { FC, useState, useRef, useCallback, useMemo } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { Button } from '@kit-xyz/button';
import { BackgroundVariant, Background, MiniMap, Controls, Panel } from 'reactflow';
import { Paper } from '@kit-xyz/paper';
import { type ExternalControls, type FlowNodeType } from '@kit-xyz/flow';
import { ButtonGroup, type GroupItem } from '@kit-xyz/button-group';

import { useViewportContext } from '@site/src/components/DocViewport';

import styles from '@site/src/components/Card/display.module.scss';

import { EDITED_EXAMPLE } from './constants';

interface FlowRunnerProps {
  isEditable?: boolean;
}

export const FlowRunner: FC<FlowRunnerProps> = ({ isEditable = false }) => {
  const { colorMode } = useViewportContext();

  const externalControls = useRef<ExternalControls>({
    setNodes: () => {},
    addNode: () => {},
    removeNode: () => {},
    // ...
    // будет больше методров
  });

  const connectExternalControls = useCallback((controls: ExternalControls) => {
    externalControls.current = controls;
  }, []);

  const [type, setType] = useState<FlowNodeType>('badge');
  const [appearance, setAppearance] = useState<string>('primary');

  const group: GroupItem[] = useMemo(
    () => [
      {
        id: 'node-type',
        items: [
          {
            id: 'badge',
            caption: 'Badge',
          },
        ],
        value: type,
        onChange: (itemId: FlowNodeType) => setType(itemId),
      },
      {
        id: 'node-appearance',
        items: [
          {
            id: 'primary',
            caption: 'Primary',
          },
          {
            id: 'tertiary',
            caption: 'Tertiary',
          },
          {
            id: 'positive',
            caption: 'Positive',
          },
          {
            id: 'informative',
            caption: 'Informative',
          },
          {
            id: 'attention',
            caption: 'Attention',
          },
          {
            id: 'negative',
            caption: 'Negative',
          },
        ],
        value: appearance,
        onChange: (appearance: string) => setAppearance(appearance),
        placeholder: 'Select',
      },
      {
        id: 'create-flow-node',
        children: 'Добавить',
        onClick: () => {
          console.log('setNodes');

          externalControls.current.setNodes((prev) => [
            ...prev,
            {
              id: String(parseInt(String(Math.random() * 100000))),
              type,
              selected: false,
              data: {
                children: 'Новый элемент',
                appearance,
              },
              position: { x: 0, y: 0 },
              hidden: false,
            },
          ]);
        },
      },
    ],
    [type, appearance],
  );

  return (
    <Paper
      colorMode={colorMode}
      fullwidth
      appearance='solid-alt'
      borderRadius='l'
      padding='xl'
      className={styles.paper}
    >
      <BrowserOnly>
        {() => {
          const { Flow } = require('@kit-xyz/flow'); // eslint-disable-line global-require, @typescript-eslint/no-var-requires

          return (
            <Flow
              id='docusaurus-demo-react-flow'
              initialData={EDITED_EXAMPLE}
              nodesConnectable={isEditable}
              nodesDraggable={isEditable}
              nodesFocusable={isEditable}
              elementsSelectable={isEditable}
              connectExternalControls={connectExternalControls}
            >
              {isEditable && (
                <>
                  <Controls />

                  <Panel position='top-left'>
                    <ButtonGroup
                      id='button-group-1'
                      group={group}
                      size='xs'
                      appearance='primary-solid'
                      withBorder
                      colorMode='light'
                    />
                  </Panel>

                  <Panel position='top-right' style={{ display: 'flex', gap: '8px' }}>
                    <Button size='xs' appearance='tertiary-solid'>
                      Right
                    </Button>

                    <Button size='xs' appearance='tertiary-solid'>
                      Right 2
                    </Button>
                  </Panel>

                  <MiniMap />

                  <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
                </>
              )}
            </Flow>
          );
        }}
      </BrowserOnly>
    </Paper>
  );
};

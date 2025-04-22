import React, { useContext, useState, useEffect, useCallback, useRef } from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import cn from 'classnames';
import { Paper } from '@kit-xyz/paper';
import { ArrowsContainer, ArrowsCard } from '@kit-xyz/arrows';

import { Legend } from '../components';
import { InfoPageContext } from '../context';

import { INTEGRATION_SCHEMA, getAnchoredSteps, getMobileAnchoredSteps, CONTAINER_ID } from './integration.schema';
import styles from './integration.module.scss';

export const Integration = () => {
  const { colorMode } = useColorMode();

  const { setWatchResizeRefs, sectionsWidths, watchResizeRefs, smoothed, cardsBorderRadius } =
    useContext(InfoPageContext);
  const sectionWidth = sectionsWidths[CONTAINER_ID]; // нужно для корректного перерасчета лейаута стрелок в секции при открытии сайдбара

  const [areRefsReady, setAreRefsReady] = useState<boolean>(false);
  const [steps, setSteps] = useState(INTEGRATION_SCHEMA);

  const stepsPositions = useRef<Record<number, { id: string; x: number }>>({});
  const timer = useRef<ReturnType<typeof setTimeout>>(null);

  const handleAnchorizedSteps = useCallback((ref: HTMLDivElement, id: string, index: number) => {
    if (ref) {
      stepsPositions.current = {
        ...stepsPositions.current,
        [index]: {
          id,
          x: ref.getBoundingClientRect().x,
        },
      };
    }

    if (timer.current) clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      setAreRefsReady(true);
    }, 200);
  }, []);

  // после того как позиции Х получены, вычисляются карточки с лейаутами для стрелок,
  // sectionWidth задебаунсен, эффект триггериться не часто и только при изменении ширины родителя
  useEffect(() => {
    if (!areRefsReady) return;
    if (!watchResizeRefs) return;
    if (!sectionWidth) return;
    if (!stepsPositions.current) return;

    const thisSection = watchResizeRefs.find((el) => el.id === CONTAINER_ID);

    const widthFromScreenLeftToSectionRight = (thisSection.getBoundingClientRect().x || 0) + sectionWidth;

    if (sectionWidth >= 997) {
      setSteps(
        getAnchoredSteps({
          steps: INTEGRATION_SCHEMA,
          positions: stepsPositions.current,
          sectionWidth: widthFromScreenLeftToSectionRight,
        }),
      );
      return;
    }

    if (sectionWidth < 997) {
      setSteps(getMobileAnchoredSteps({ steps: INTEGRATION_SCHEMA }));
    }
  }, [areRefsReady, sectionWidth, watchResizeRefs]);

  return (
    <div id={CONTAINER_ID} ref={setWatchResizeRefs} className={styles.container}>
      <Legend
        className={styles.legend}
        badges={[
          {
            children: 'Дизайн-система',
            appearance: 'tertiary-solid',
          },
          {
            children: 'Обязательные шаги',
            appearance: 'primary-solid',
          },
          {
            additionalLabel: 'Необязательные шаги',
            appearance: 'primary-solid',
          },
        ]}
      />

      <ArrowsContainer strokeColor='neutral' strokeShade='300' lineStyle='curve' colorMode={colorMode}>
        <div
          className={cn(styles.flexwrap, {
            [styles.flexwrap_column]: sectionWidth < 997,
          })}
        >
          {steps.map(({ id, title, appearance = 'default', anchors, minWidth }, index) => (
            <ArrowsCard
              id={id}
              key={id}
              fullWidth={sectionWidth < 997}
              anchors={anchors}
              // devMode
            >
              <Paper
                borderRadius={sectionWidth < 997 ? 'l' : cardsBorderRadius}
                padding={sectionWidth < 997 ? 'l' : 'xl'}
                fullwidth={sectionWidth < 997}
                smoothedCorners={smoothed}
                ref={(inst) => handleAnchorizedSteps(inst, id, index)}
                className={cn(styles.step, styles[`step_${appearance}`])}
                style={{ minWidth }}
              >
                <span>{title}</span>
              </Paper>
            </ArrowsCard>
          ))}
        </div>
      </ArrowsContainer>
    </div>
  );
};

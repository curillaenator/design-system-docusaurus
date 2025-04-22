import React, { useContext } from 'react';
import cn from 'classnames';
import { animateScroll as scroll, scroller } from 'react-scroll';
import { useColorMode } from '@docusaurus/theme-common';
import { Button } from '@kit-xyz/button';

import { MainPageContext } from '../context';
import ArrowIcon from '../assets/icons/ArrowDownIcon';

import { TABS, SCROLL_OPTIONS, COVER_ID, TAB_0_ID, DURATION, type TabProps } from './navigation.schema';
import styles from './navigation.module.scss';

const getOffset = (w: number) => {
  if (w >= 1920) return -128;
  return -96;
};

export const Navigation = () => {
  const { width, activeTabId, setHandClick } = useContext(MainPageContext);
  const { colorMode } = useColorMode();

  const handleTabClick = (item: TabProps) => {
    setHandClick(item.id);
    scroller.scrollTo(item.id, { ...SCROLL_OPTIONS, offset: getOffset(width) });
  };

  const handleActionButton = () => {
    if (activeTabId[COVER_ID]) {
      handleTabClick({ id: TAB_0_ID, title: '' });
    } else {
      scroll.scrollToTop(SCROLL_OPTIONS);
      setTimeout(() => setHandClick(COVER_ID), DURATION);
    }
  };

  return (
    <div className={styles.container}>
      <nav>
        {TABS.map(({ id, title }) => (
          <Button
            key={id}
            active={activeTabId[id]}
            appearance='primary-transparent'
            size='xs'
            onClick={() => handleTabClick({ id, title })}
            colorMode={colorMode}
          >
            {title}
          </Button>
        ))}
      </nav>

      <Button
        size='xs'
        colorMode={colorMode}
        appearance='primary-transparent'
        onClick={handleActionButton}
        IconRight={ArrowIcon}
        className={cn(styles.buttonArrow, {
          [styles.buttonArrow_up]: !activeTabId[COVER_ID],
        })}
      >
        {activeTabId[COVER_ID] ? 'Больше информации' : 'Наверх'}
      </Button>
    </div>
  );
};

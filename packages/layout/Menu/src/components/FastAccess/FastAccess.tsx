import React, { FC, useContext } from 'react';
import cn from 'classnames';
import { Input } from '@kit-xyz/input';
import { SelectExtended } from '@kit-xyz/select';

import { FastAccessProps } from './interfaces';
import { MenuContext } from '../../context/MenuContext';

import styles from './fastaccess.module.scss';
import tracker from '../../trackerTmpStyles/fastAccess.module.scss';

const SEARCH_ID = 'polygon-layout-menu-search-input';

export const FastAccess: FC<FastAccessProps> = (props) => {
  const { isOpen, screen, colorMode, toggleOpen } = useContext(MenuContext);

  const { input, select } = props;

  const isMenuDrawer = screen === 'mobile' || screen === 'tablet';

  return (
    <div className={styles.fastAccess}>
      {!!input && (
        <Input
          {...input}
          id={SEARCH_ID}
          appearance='tertiary-transparent'
          colorMode={colorMode}
          placeholder={isOpen ? input.placeholder : undefined}
          clearable
          contentClassName={cn({ [styles.input_minified]: !isOpen })}
          className={tracker.input}
          onContainerClick={() => {
            if (isOpen) return;

            toggleOpen();
            setTimeout(() => document.getElementById(SEARCH_ID)?.focus(), 0);
          }}
        />
      )}

      {!!select && (
        <SelectExtended
          openNodeProps={{
            appearance: 'tertiary-solid',
            fullWidth: true,
            className: tracker.selectOpenNodeButton,
          }}
          maxWidth={335}
          minWidth={335}
          maxHeight={400}
          matchWidth={isOpen || isMenuDrawer}
          colorMode={colorMode}
          items={select.items}
          buttonItems={select.buttonItems}
          value={select.value}
          onChange={select.onChange}
          minified={!isMenuDrawer && !isOpen}
          closeOnItemClick={false}
          placement='bottom-start'
        />
      )}
    </div>
  );
};

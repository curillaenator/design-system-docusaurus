import React, { Fragment } from 'react';

import { Dropable } from '@kit-base/dropable';
import { Button } from '@kit-xyz/button';

import { Divider, ExtendedItem, SelectIdProp } from '../../components';

import SelectThinSmall from '@kit-xyz/icon/src/assets/solid/SelectThinSmall';

import { useExtendedSelectProps } from './hooks/useExtendedProps';

import { DEFAULT_TEST_ID } from '../../constants';
import type { SelectExtendedProps } from './interfaces';

export const SelectExtended = <T extends SelectIdProp>(props: SelectExtendedProps<T>) => {
  const {
    id,
    dataTestId,
    disabled,
    openNodeProps,
    items = [],
    buttonItems = [],
    onChange,
    isOpen,
    openNodeLabel,
    openNodeIcon,
    colorMode,
    minified,
    triggerRef,
    ...rest
  } = useExtendedSelectProps(props);

  return (
    <Dropable
      {...rest}
      offset={minified ? [0, 8] : [0, 0]}
      matchWidth={!minified}
      dataTestId={dataTestId || DEFAULT_TEST_ID}
      disabled={disabled}
      popperOptions={{
        modifiers: [
          {
            name: 'flip',
            options: {
              fallbackPlacements: ['bottom', 'bottom'],
            },
          },
        ],
      }}
      openNode={
        <Button
          id={id}
          ref={triggerRef}
          labelsFullwidth
          labelsReversed={!!openNodeProps.secondaryText}
          labelsJustify='between'
          tabIndex={0}
          type='button'
          data-testid={dataTestId || DEFAULT_TEST_ID}
          disabled={disabled}
          fullWidth
          colorMode={isOpen ? 'light' : colorMode}
          IconLeft={openNodeIcon}
          IconRight={minified ? undefined : () => <SelectThinSmall size='xl' />}
          {...openNodeProps}
        >
          {minified ? undefined : openNodeLabel}
        </Button>
      }
    >
      <>
        {items.map((item) => {
          return (
            <ExtendedItem
              {...item}
              Icon={item.Icon}
              key={item.id}
              colorMode='light'
              onClick={() => {
                if (!item.isUnselectable) onChange(item.id);
                if (item.onClick) item.onClick(item);
              }}
            />
          );
        })}

        {!!buttonItems.length &&
          buttonItems.map((section, index) => {
            const dividerVisibility = index !== 0 || items.length > 0;
            if (!section.length) return null;

            return (
              <Fragment key={section.map((item) => item.id).join('')}>
                {dividerVisibility && <Divider />}

                {section.map((item) => (
                  <ExtendedItem
                    {...item}
                    key={item.id}
                    colorMode='light'
                    onClick={() => {
                      if (item.onClick) item.onClick(item);
                    }}
                  />
                ))}
              </Fragment>
            );
          })}
      </>
    </Dropable>
  );
};

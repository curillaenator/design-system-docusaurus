import React, { useEffect, useRef } from 'react';
import cn from 'classnames';
import SelectThin from '@kit-xyz/icon/src/assets/solid/SelectThin';
import CrossIcon from '@kit-xyz/icon/src/assets/duotone/CrossIcon';

import type { ComboboxProps } from '../interfaces';
import styles from '../combobox.module.scss';

export const useProps = (props: ComboboxProps) => {
  const {
    size = 's',
    appearance = 'solid',
    shape = 'rounded',
    colorMode = 'light',
    state,
    IconChecked,
    IconCarret,
    IconSearch,
    IconChipRemove,
    IconClear,
    menuPortalTarget,
    appendToId,
    ...rest
  } = props;

  const portalRef = useRef<HTMLDivElement | undefined>(undefined);

  useEffect(() => {
    if (menuPortalTarget) return;
    if (!appendToId) return;

    const portal = document.getElementById(appendToId) as HTMLDivElement;
    if (portal) portalRef.current = portal;

    return () => {
      portalRef.current = undefined;
    };
  }, [menuPortalTarget, appendToId]);

  return {
    ...rest,
    iconLeft: IconSearch ? <IconSearch size='xl' /> : undefined,
    iconRight: IconCarret ? <IconCarret size='xl' /> : <SelectThin size='xl' />,
    iconChecked: IconChecked ? <IconChecked size='m' color='tertiary' className={styles.iconChecked} /> : undefined,
    iconRemove: IconChipRemove ? <IconChipRemove size='s' /> : <CrossIcon size='s' />,
    iconClear: IconClear ? <IconClear size='xl' /> : <CrossIcon size='xl' />,
    menuListScrollClassName: styles[`menuListScroll_${colorMode}`],
    menuPortalTarget: menuPortalTarget || portalRef.current,
    className: cn(
      styles.variables,
      styles[`_size_${size}`],
      styles[`_shape_${shape}`],
      styles[`_color-${appearance}_${colorMode}`],
    ),
  };
};

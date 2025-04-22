import React, { FC, useContext } from 'react';
import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';
import { popup } from '@kit-layout/popup';
import { SupportCard } from '@kit-layout/support-card';
import { Button } from '@kit-xyz/button';

import { LayoutContext } from '../../context';

import styles from './header.module.scss';

export const Header: FC = ({ children }) => {
  const { state } = useContext(LayoutContext);
  const { isConfigurator } = state;

  // логика только для докуавра
  const { pathname } = useLocation();
  // end логика только для докуавра

  return (
    <header className={styles.header}>
      {/** логика только для докуавра */}
      {isConfigurator && (
        <div className={styles.flex}>
          <Button
            // @ts-expect-error docusavr Link differs from Link of react-router-dom, works fine
            component={Link}
            to={`/${pathname === '/configurator' ? 'tracker' : 'configurator'}`}
            size='xs'
            appearance='primary-solid'
          >
            {pathname === '/configurator' ? 'В приложение' : 'В конфигуратор'}
          </Button>

          <Button
            size='xs'
            appearance='primary-solid'
            onClick={() =>
              popup({
                // @ts-expect-error пофиксить несоотвествие типов
                Content: SupportCard,
              })
            }
          >
            Поддержка
          </Button>
        </div>
      )}
      {/** end логика только для докуавра */}

      {children}
    </header>
  );
};

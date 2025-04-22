import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Head from '@docusaurus/Head';

import { Layout, useLayoutConfig, useLayoutState, useLeftMenu, Configurator } from '../components/LayoutPage';

const LayoutPage = () => {
  const layoutConfig = useLayoutConfig();
  const layoutState = useLayoutState();
  const leftMenu = useLeftMenu();

  return (
    <>
      <Head>
        <title>Works configurator</title>
        <meta name='description' content='Демонстрация лейаута на базе KitUI' />
      </Head>

      <BrowserOnly>
        {() => (
          <Layout {...layoutConfig} {...leftMenu} {...layoutState}>
            <Configurator contentPaddings={layoutConfig.config.contentPaddings} />
          </Layout>
        )}
      </BrowserOnly>
    </>
  );
};

export default LayoutPage;

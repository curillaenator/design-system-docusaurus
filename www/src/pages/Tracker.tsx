import React from 'react';
// import BrowserOnly from '@docusaurus/BrowserOnly';
import Head from '@docusaurus/Head';

// import { Layout, useLayoutConfig, useLayoutState, useLeftMenu } from '../components/LayoutPage';

const WorksLayout = () => {
  // const layoutConfig = useLayoutConfig();
  // const layoutState = useLayoutState();
  // const leftMenu = useLeftMenu();

  return (
    <>
      <Head>
        <title>Works</title>
        <meta name='description' content='Демонстрация лейаута на базе KitUI' />
      </Head>

      {/* <BrowserOnly>
        {() => (
          <Layout {...layoutConfig} {...leftMenu} {...layoutState}>
            <h1>Foo-bar-baz</h1>
          </Layout>
        )}
      </BrowserOnly> */}
    </>
  );
};

export default WorksLayout;

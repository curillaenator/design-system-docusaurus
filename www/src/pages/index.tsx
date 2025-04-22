import React, { useMemo } from 'react';
import { Element } from 'react-scroll';
import Layout from '@theme/Layout';
import { Button } from '@kit-xyz/button';
import { Paper } from '@kit-xyz/paper';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  Cover,
  Navigation,
  Architecture,
  Cases,
  Advantages,
  Products,
  Delivery,
  Clients,
  Articles,
  Technologies,
  WidthWatch,
  MainPageContext,
  useMainPageNavigation,
  useHomePageState,
} from '@site/src/components/HomePage';
import PlusIcon from '@kit-xyz/icon/src/assets/solid/PlusIcon';
import {
  ChatIcon,
  cover,
  // partnership
} from '@site/src/components/HomePage/assets';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const navigation = useMainPageNavigation();
  const windowWidth = useHomePageState();

  const contextValue = useMemo(
    () => ({
      ...navigation,
      ...windowWidth,
    }),
    [navigation, windowWidth],
  );

  return (
    <Layout
      title={siteConfig.title}
      description='Компоненты, стили и утилиты с широкими настройками функциональных возможностей и гибкой темизацией их отображения'
    >
      <MainPageContext.Provider value={contextValue}>
        <Cover
          id='main-page-cover-id'
          imageSrc={cover}
          section='low'
          title='Облачная платформа для разработки бизнес–решений'
          subtitle='Набор продуктов для быстрого создания и легкого масштабирования промышленных приложений любой сложности'
          button={
            <Paper padding='none' smoothedCorners borderRadius='l'>
              <Button appearance='primary-transparent' IconLeft={ChatIcon}>
                Получить консультацию
              </Button>
            </Paper>
          }
        />

        <Navigation />

        <Architecture />
        <Products />
        <Technologies />
        <Cases />
        <Advantages />

        <Element name='partnership-section'>
          <Cover
            id='partnership-section'
            imageSrc={cover}
            title='Партнерская программа для IT-интеграторов'
            subtitle='Станьте партнером XyzТеха и внедряйте у клиентов цифровую облачную платформу'
            button={
              <Paper padding='none' smoothedCorners borderRadius='l'>
                <Button appearance='primary-transparent' IconLeft={PlusIcon}>
                  Стать партнёром
                </Button>
              </Paper>
            }
            section='high'
            appearance='dark'
            // imageSize='140%'
          />
        </Element>

        <Delivery />
        <Clients />
        <Articles />

        <WidthWatch />
      </MainPageContext.Provider>
    </Layout>
  );
}

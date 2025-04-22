import React, { FC } from 'react';
import cn from 'classnames';
import { Menu } from '@kit-layout/menu';
import { PopupContainer, DEFAULT_POPUP_CONTAINER_ID } from '@kit-layout/popup';
import { Paper } from '@kit-xyz/paper';

import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Drawer } from './components/Drawer/Drawer';
import { Modal } from './components/Modal/Modal';
import { ModeWatcher } from './components/ModeWatcher/ModeWatcher';
import { LayoutContext } from './context';
import type { LayoutPropsWithStateAndConfigHandlers } from './interfaces';
import styles from './layout.module.scss';

export const Layout: FC<LayoutPropsWithStateAndConfigHandlers> = (props) => {
  const {
    config,
    state,
    leftMenu,
    children,
    toggleLeftSidebar,
    // toggleLeftDrawer,
    // handleInputValue,
  } = props;

  const {
    leftSidebar,
    // leftDrawer,
    // leftDrawerClosedWidth,

    rightSidebar,
    RightSidebarContent: RightSidebar,

    rightDrawer,
    RightDrawerContent: RightDrawer,
    // rightDrawerClosedWidth,

    isHeader,
    isFooter,

    isModal,
    modalContent: ModalContent,
    modalConfig,

    themeClassName,
  } = config;

  const {
    mode,
    // inputValue,
    isSidebarLeftOpen,
    isDrawerRightFullOpen,
  } = state;

  return (
    <LayoutContext.Provider value={props}>
      <div
        id='tracker-layout-template'
        className={cn(styles.layout, styles.variables, styles[`mode-${mode}`], themeClassName)}
      >
        {leftSidebar && (
          <Sidebar side='left'>
            <Menu
              dropableAppendToId='tracker-layout-template'
              logo={leftMenu.logo}
              user={leftMenu.user}
              settings={leftMenu.settings}
              elements={leftMenu.elements}
              selectItems={leftMenu.selectItems}
              selectCurrent={leftMenu.selectCurrent}
              onSelectChange={leftMenu.onSelectChange}
              colorMode='dark'
              isOpen={isSidebarLeftOpen}
              toggleOpen={() => toggleLeftSidebar()}
              // input={
              //   leftMenu.input
              //     ? {
              //         value: inputValue,
              //         onChange: (e) => handleInputValue(e.target.value),
              //         onClearInput: () => handleInputValue(''),
              //         IconRight: MagnifyingGlassIcon,
              //       }
              //     : leftMenu.input
              // }
            />
          </Sidebar>
        )}

        {/** leftDrawer можно пока не добавлять в основной лейаут, требует доработок */}
        {/* {leftDrawer && (
          <Drawer colorMode='color' placement='left' size='xs'>
            <Menu
              {...leftMenu}
              colorMode='color'
              isOpen={isDrawerLeftOpen}
              toggleOpen={() => toggleLeftDrawer()}
              activeListItem={activeMenuItem}
              setActiveListItem={setActiveListItem}
              input={
                leftMenu.input
                  ? {
                      value: inputValue,
                      onChange: (e) => handleInputValue(e.target.value),
                      onClearInput: () => handleInputValue(''),
                      IconRight: MagnifyingGlassIcon,
                    }
                  : leftMenu.input
              }
            />
          </Drawer>
        )} */}
        {/** end leftDrawer можно пока не добавлять в основной лейаут, требует доработок */}

        <div className={styles.pageContainer}>
          <div className={styles.page}>
            {isHeader && <Header />}

            <main className={styles.main}>
              {children}

              {isFooter && <Footer />}
            </main>
          </div>
        </div>

        {rightSidebar && !!RightSidebar && (
          <Sidebar side='right'>
            <Paper
              fullwidth
              appearance='solid-alt'
              colorMode={mode}
              borderRadius='none'
              padding='2xl'
              className={styles.rightSidebarPaper}
            >
              <RightSidebar />
            </Paper>
          </Sidebar>
        )}

        {rightDrawer && !!RightDrawer && (
          <Drawer colorMode={mode} size='xl' placement='right' fullsize={isDrawerRightFullOpen}>
            <Paper
              fullwidth
              appearance='solid-alt'
              colorMode={mode}
              borderRadius='none'
              padding='2xl'
              className={styles.rightDrawerPaper}
            >
              <RightDrawer />
            </Paper>
          </Drawer>
        )}

        {isModal && !!ModalContent && (
          <Modal {...modalConfig} colorMode={mode}>
            <ModalContent />
          </Modal>
        )}
      </div>

      <PopupContainer containerId={DEFAULT_POPUP_CONTAINER_ID} limit={1} />

      <ModeWatcher />
    </LayoutContext.Provider>
  );
};

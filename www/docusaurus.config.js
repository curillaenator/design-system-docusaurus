/* eslint-disable @typescript-eslint/no-var-requires */

// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/vsLight');
const darkCodeTheme = require('prism-react-renderer/themes/oceanicNext');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Design System',
  tagline: 'Design System Documentation',
  favicon: 'img/favicon.ico',
  url: 'https://ds.b-v3.ru/',
  baseUrl: process.env.DOC_BASE_URL ?? '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          breadcrumbs: false,
        },

        blog: false,

        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],

  plugins: [
    [
      'docusaurus-plugin-sass',
      {
        // sass-plugin opts
      },
    ],
    [
      'docusaurus-lunr-search',
      {
        languages: ['en', 'ru'],
        indexBaseUrl: true,
      },
    ],
    [
      'docusaurus-custom-config',
      {
        // options
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Preview image on sharing via direct link
      image: 'img/social-card.jpg',

      docs: {
        sidebar: {
          hideable: true,
          // autoCollapseCategories: true,
        },
      },

      navbar: {
        // hideOnScroll: true,

        logo: {
          src: 'img/logotype.svg',
        },

        items: [
          // {
          //   type: 'doc',
          //   docId: '/category/style',
          //   position: 'right',
          //   label: 'Design System & UI Kit Docs',
          // },
          // {
          //   type: 'docsVersionDropdown',
          //   position: 'right',
          //   dropdownActiveClassDisabled: true,
          // },
        ],
      },

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

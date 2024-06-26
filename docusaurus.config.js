// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'A modern calendar for creators',
  tagline: 'Open source calendar for time well spent, using habit tracking, people analytics, and scheduling.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://rechrono.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'chronoapp', // Usually your GitHub org/user name.
  projectName: 'chrono', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        disableSwitch: true,
      },
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      navbar: {
        logo: {
          alt: 'Chrono Logo',
          src: 'img/chrono-logo-text.svg',
        },
        items: [
          {
            to: 'https://app.rechrono.com',
            label: 'Log in',
            position: 'right'
          },
          {
            to: '/why-chrono',
            label: 'Why Chrono',
            position: 'right'
          },
          {
            href: 'https://github.com/chronoapp/chrono',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Company',
            items: [
              {
                label: 'Why us',
                to: '/why-chrono',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/chrono_app',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Terms',
                to: '/terms',
              },
              {
                label: 'Privacy Policy',
                to: '/privacy-policy'
              },
              {
                label: 'GitHub',
                href: 'https://github.com/chronoapp/chrono',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Chrono, Inc.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),

    plugins: [
      async function myPlugin(context, options) {
        return {
          name: "docusaurus-tailwindcss",
          configurePostCss(postcssOptions) {
            // Appends TailwindCSS and AutoPrefixer.
            postcssOptions.plugins.push(require("tailwindcss"));
            postcssOptions.plugins.push(require("autoprefixer"));
            return postcssOptions;
          },
        };
      },
    ],
};

export default config;

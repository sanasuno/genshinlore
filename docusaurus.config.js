// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const isDev = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV; // 修正

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '原神考察録',
  tagline: 'Genshin Impact Lore by Sanasuno',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://sanasuno.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: isDev ? '/' : '/glore/',  // ローカルでは '/' を使う

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'sanasuno', // Usually your GitHub org/user name.
  projectName: 'genshinlore', // Usually your repo name.

  trailingSlash: false,
  deploymentBranch: "gh-pages", // デプロイ先ブランチ

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '原神考察録',
        logo: {
          alt: 'ロゴ',
          src: 'img/logo-light.png',
          srcDark: 'img/logo-dark.png',
        },
        items: [
          {
            to: 'docs',
            position: 'left',
            label: '資料',
          },
          {
            to: 'lore',
            position: 'left',
            label: '考察',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '連絡先',
            items: [
              {
                label: 'X: @sanasuno_game',
                href: 'https://x.com/sanasuno_game',
              },
            ],
          },
        ],
        copyright: `当サイトにおいて引用されている『原神』内の文章・画像等の著作権は、COGNOSPHERE PTE. LTD. が保有します。<br/>当サイトのコンテンツは特に表記のない限りCC-BY-SA 3.0ライセンスの下で利用可能です<br/>継承元：<a href=https://genshin-impact.fandom.com/wiki/>Genshin Impact Wiki</a>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

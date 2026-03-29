const lightCodeTheme = require("prism-react-renderer").themes.github;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "RengeAI 文档库",
  tagline: "极简风格的 AI 组织与项目管理文档站",
  favicon: "img/favicon.svg",
  url: "https://rengeai.github.io",
  baseUrl: "/docs-site/",
  organizationName: "rengeai",
  projectName: "docs-site",
  onBrokenLinks: "throw",
  trailingSlash: true,
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "throw"
    }
  },
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
    localeConfigs: {
      "zh-Hans": {
        htmlLang: "zh-CN",
        label: "简体中文"
      }
    }
  },
  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./docs/sidebars.js"),
          showLastUpdateTime: true
        },
        blog: false,
        pages: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ],
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        docsRouteBasePath: "/",
        hashed: true,
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        language: ["zh"]
      }
    ],
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            to: "/",
            from: ["/README"]
          }
        ]
      }
    ]
  ],
  themeConfig: {
    image: "img/social-card.svg",
    navbar: {
      title: "RengeAI 文档库",
      items: [
        {
          type: "docSidebar",
          sidebarId: "gettingStartedSidebar",
          label: "开始阅读",
          position: "left"
        },
        {
          type: "docSidebar",
          sidebarId: "productGuideSidebar",
          label: "产品指南",
          position: "left"
        },
        {
          type: "search",
          position: "right"
        }
      ]
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: false
      }
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
      respectPrefersColorScheme: false
    },
    prism: {
      theme: lightCodeTheme
    }
  }
};

module.exports = config;

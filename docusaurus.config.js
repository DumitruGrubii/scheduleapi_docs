module.exports = {
  title: "Scheduleapi documentation",
  tagline:
    "Here you will find some good tips on how to use it at its full potential!",
  url: "https://docs.scheduleapi.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "docodeou", // Usually your GitHub org/user name.
  projectName: "scheduleapi_docs", // Usually your repo name.
  themeConfig: {
    colorMode: {
      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: false,

      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Scheduleapi",
      logo: {
        alt: "Scheduleapi Logo",
        src: "img/white_theme_logo.svg",
        srcDark: "img/dark_theme_logo.svg",
      },
      items: [
        {
          to: "docs/onboard",
          activeBasePath: "docs/onboard",
          label: "Onboard",
          position: "left",
        },
        {
          to: "docs/security",
          activeBasePath: "docs/security",
          label: "Security",
          position: "left",
        },
        {
          href: "https://github.com/DocodeOU/scheduleapi_docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Scheduleapi",
          items: [
            {
              label: "Dashboard",
              to: "https://scheduleapi.app/dashboard",
            },
            {
              label: "Privacy Policy",
              to: "https://scheduleapi.app/privacy-policy",
            },
            {
              label: "Terms & Condition",
              to: "https://scheduleapi.app/terms-and-conditions",
            },
          ],
        },
        {
          title: "Docs",
          items: [
            {
              label: "Onboard",
              to: "docs/onboard",
            },
            {
              label: "Security",
              to: "docs/security",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Docode OÜ. Docs built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/DocodeOU/scheduleapi_docs/tree/main",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/DocodeOU/scheduleapi_docs/tree/main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};

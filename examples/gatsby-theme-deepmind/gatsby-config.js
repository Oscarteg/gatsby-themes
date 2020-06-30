module.exports = {
  siteMetadata: {
    title: `Phoenix.`,
    description: `A personal blogging theme for Gatsby with great typography and dark mode.`,
    siteUrl: `http://localhost:8000`,
    startUrl: `/`,
    icon: `src/images/icon.png`,
    logo: `logo.png`,
    menuLinks: [
      {
        name: `Home`,
        link: `/`,
      },
      {
        name: `Blog`,
        link: `/blog`,
      },
    ],
  },
  plugins: [
    // This is a list of all themes that this starter is using.
    // To disable a theme, remove it here and run `yarn remove @arshad/gatsby-theme-NAME`.
    `@oscarteg/gatsby-theme-blog-core`,
    `@oscarteg/gatsby-theme-page-core`,
    // `@arshad/gatsby-theme-portfolio-core`,
    // `@arshad/gatsby-theme-photo-core`,
    `@oscarteg/gatsby-theme-deepmind`,
  ],
};

module.exports = {
  siteMetadata: {
    title: `Deepmind.`,
    description: ``,
    siteUrl: `http://localhost:8000`,
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
      {
        name: `About`,
        link: `/about`,
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

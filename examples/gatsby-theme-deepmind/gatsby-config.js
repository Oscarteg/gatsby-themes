module.exports = {
  siteMetadata: {
    title: `Deepmind.`,
    description: ``,
    siteUrl: `http://localhost:8000`,
    // icon: `src/images/icon.png`,
    logo: `logo.png`,
    menuLinks: [
      {
        name: `Home`,
        link: `/`,
      },
      {
        name: `Blog`,
        link: `/blog`,
        partiallyActive: true,
      },
      {
        name: `About`,
        link: `/about`,
      },
      {
        name: `Projects`,
        link: `/projects`,
      },
    ],
    socialLinks: [
      {
        name: `Twitter`,
        url: `https://twitter.com/oscartegiffel`,
        icon: `twitter`,
      },
      {
        name: `Github`,
        url: `https://github.com/oscarteg`,
        icon: `github`,
      },
      {
        name: `Youtube`,
        url: `https://youtube.com`,
        icon: `youtube`,
      },
    ],
  },
  plugins: [
    // This is a list of all themes that this starter is using.
    // To disable a theme, remove it here and run `yarn remove @arshad/gatsby-theme-NAME`.
    `@oscarteg/gatsby-theme-blog-core`,
    `@oscarteg/gatsby-theme-page-core`,
    `@oscarteg/gatsby-theme-portfolio-core`,
    // `@arshad/gatsby-theme-photo-core`,
    `@oscarteg/gatsby-theme-deepmind`,
  ],
};

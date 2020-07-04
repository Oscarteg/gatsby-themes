module.exports = {
  siteMetadata: {
    title: `Oscar te Giffel`,
    description: `Portfolio website om mijn projecten te laten zien.`,
    author: `@oscartegiffel`,
    siteUrl: `https://oscartegiffel.com`,
    repoUrl: `https://github.com/oscarteg/homepage`,
    resumeUrl: `https://resume.oscartegiffel.com`,
    social: {
      twitter: `oscartegiffel`,
      linkedin: `otegiffel`,
      github: `oscarteg`,
      gitlab: `oscarteg`,
      blog: `https://blog.oscartegiffel.com`,
    },
  },
  plugins: [
    // This is a list of all themes that this starter is using.
    // To disable a theme, remove it here and run `yarn remove @arshad/gatsby-theme-NAME`.
    // `@oscarteg/gatsby-theme-blog-core`,
    `@oscarteg/gatsby-theme-page-core`,
    `@oscarteg/gatsby-theme-portfolio-core`,
    // `@arshad/gatsby-theme-photo-core`,
    `@oscarteg/gatsby-theme-showoff`,
  ],
};

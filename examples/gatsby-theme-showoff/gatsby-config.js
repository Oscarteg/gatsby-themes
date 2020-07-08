module.exports = {
  siteMetadata: {
    title: `Oscar te Giffel`,
    description: `Portfolio website om mijn projecten te laten zien.`,
    bio: `@oscartegiffel`,
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
    footer: [
      {
        "frontend development": ["react", "vue"],
      },
      {
        "backend development": ["php", "java"],
      },
    ],
  },
  plugins: [`@oscarteg/gatsby-theme-showoff`],
};

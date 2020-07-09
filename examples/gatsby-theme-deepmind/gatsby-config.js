module.exports = {
  siteMetadata: {
    title: `Deepmind.`,
    description: ``,
    siteUrl: `http://localhost:8000`,
    // icon: `src/images/icon.png`,
    repo: `https://example.com`,
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
      {
        name: `Facebook`,
        url: `https://facebook.com`,
        icon: `facebook-f`,
      },
    ],
  },
  plugins: [`@oscarteg/gatsby-theme-deepmind`],
};

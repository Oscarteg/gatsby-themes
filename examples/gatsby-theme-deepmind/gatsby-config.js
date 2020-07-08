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
        icon: `fab fa-twitter`,
      },
      {
        name: `Github`,
        url: `https://github.com/oscarteg`,
        icon: `fab fa-github`,
      },
      {
        name: `Youtube`,
        url: `https://youtube.com`,
        icon: `fab fa-youtube`,
      },
      {
        name: `Facebook`,
        url: `https://facebook.com`,
        icon: `fab fa-facebook-f`,
      },
    ],
  },
  plugins: [`@oscarteg/gatsby-theme-deepmind`],
};

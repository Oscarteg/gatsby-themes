module.exports = {
  siteMetadata: {
    title: `Deepmind.`,
    description: ``,
    siteUrl: `http://localhost:8000`,
    // icon: `src/images/icon.png`,
    contactEmail: `john@appleseed.com`,
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
        icon: [`fab`, `twitter`],
      },
      {
        name: `Github`,
        url: `https://github.com/oscarteg`,
        icon: [`fab`, `github`],
      },
      {
        name: `Youtube`,
        url: `https://youtube.com`,
        icon: [`fab`, `youtube`],
      },
      {
        name: `Facebook`,
        url: `https://facebook.com`,
        icon: [`fab`, `facebook-f`],
      },
      {
        name: `Facebook`,
        url: `https://facebook.com`,
        icon: [`far`, `file-code`],
      },
    ],
  },
  plugins: [`@oscarteg/gatsby-theme-deepmind`],
};

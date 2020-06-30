module.exports = {
  plugins: [
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require("tailwindcss")(require("./src/tailwind.config")),
          require("autoprefixer"),
        ],
      },
    },
  ],
};

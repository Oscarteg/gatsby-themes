const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: {
    mode: "all",
    content: [
      "./src/**/*.tsx",
      "./node_modules/@oscarteg/gatsby-theme-deepmind/src/**/*.tsx",
    ],
  },
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        mono: ["IBM Plex Mono", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  variants: {
    translate: ["responsive", "hover", "focus", "active", "group-hover"],
    flexDirection: ["responsive", "odd"],
  },
  plugins: [require("@tailwindcss/ui"), require("@tailwindcss/typography")],
};

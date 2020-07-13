const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
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
  plugins: [require("@tailwindcss/ui")],
};

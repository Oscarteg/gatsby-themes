const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.tsx", "./src/**/*.jsx"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ["Proxima Nova", ...defaultTheme.fontFamily.sans],
        mono: ["Maison Neue", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};

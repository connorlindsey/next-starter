const colors = require("tailwindcss/colors")

module.exports = {
  mode: "jit",
  content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        primary: colors.teal,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
}

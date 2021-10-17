module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      xs: "3px",
    },
    fill: {
      primary: "#ff867f",
      white: "white",
      dark: "#C50E29",
    },

    extend: {},
  },

  variants: {
    extend: {},
  },
  plugins: [],
};

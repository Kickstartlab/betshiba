/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {
      yellow: {
        "50": "#09EFD3",
        "100": "#FFA409",
      },
      blue: {
        "50": "#0D0921",
        "100": "#080d14",
        "200": "#101124"
      },
      black: {
        "50": "#252525",
        "100": "#06071B",
      },
      white: {
        "50": "#A09FAF",
        "100": "#fff",
      },
      pink: {
        "50": "rgba(233, 70, 218, 0.3)",
        "100": "#EF09DA",
      },
    },
    fontFamily: {
      'russo': ["'Russo One', sans-serif"],
      'inter': ["'Inter', sans-serif"],
      'montserat': ["'Montserrat', sans-serif"]
    }
  },
  plugins: [],
}

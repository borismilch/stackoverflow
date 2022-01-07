module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "gray-light": "#393939",
        "brown": "#2e2e2e",
        "dark": "#3d3d3d",
        "light": "#393939",
        "redis": "#d25f5d",
        "yellow": "#524c38",
        "yellow-dark": "#474336",
        "text": "#c4c8cc",
        "primary": "#f48225",
        "hover-color": "#cfd2d6"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms'), require('@tailwindcss/line-clamp'),  require('@tailwindcss/line-clamp'),],
};

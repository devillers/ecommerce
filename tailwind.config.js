const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    fontFamily: {
      poppin: ['Poppins', ...defaultTheme.fontFamily.sans],
      koulen: ['Koulen', ...defaultTheme.fontFamily.sans],
      lobster: ['Lobster', ...defaultTheme.fontFamily.sans],
      pacifico: ['Pacifico', ...defaultTheme.fontFamily.sans],
      comfortaa: ['Comfortaa', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      backgroundImage: {
        minimalist: "url('/camping.jpg')",
      },
      colors: {
        orange: '#A33C3C',
        jaune: 'F0EE89',
        saumon: '#EF7070',
        bleuC: '#59B5F0',
        bleu: '#3E98C7',
      },
    },
  },
  plugins: [],
};

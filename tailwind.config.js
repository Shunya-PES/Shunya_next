/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#484848',
        secondary: '#707070',
        background: '#001322',
        accent_dark: '#0EA5E9',
        accent_light: '#38BDF9',
        // for transparent background
        shade: 'rgba(0, 0, 0, 0.1)',
        shade2: 'rgba(255, 255, 255, 0.6)',
        shade3: 'rgba(255, 255, 255, 0.9)',
      },
    },
  },
  plugins: [],
};

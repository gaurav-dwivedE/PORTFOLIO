/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust paths as needed
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'Helvetica', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
      },
    },
  },
  darkMode: 'class', // Enable dark mode using a CSS class
  variants: {},
  plugins: [],
};
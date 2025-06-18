/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        netflix: {
          100: '#ffe5e5',
          200: '#ffcccc',
          300: '#ff6666',
          400: '#ff3333', 
          500: '#e50914', 
          600: '#cc0000',
        },
      },
    },
  },
  plugins: [],
};

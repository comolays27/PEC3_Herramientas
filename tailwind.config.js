/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,scss}"],
  theme: {
    extend: {
      fontFamily: {
        principal: ['"Roboto Flex"', 'sans-serif'],
      },
      
      boxShadow: {
        shadow: '0px 10px 5px 0px rgba(0, 0, 0, 0.75)',
      },

      colors: {
        'common-background': '#d6cfec',
        'nav-color': '#eca539',
        'header-nav-links': '#94e284',
        'nav-botones-hover': '#eca539',
        'standar-blue': '#6b91f1',
        'main-sentence': '#35f60a',
      }
    },
  },
  plugins: [],
}
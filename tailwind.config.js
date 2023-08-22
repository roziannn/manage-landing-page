/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1280px'
    },
    extend: {
      fontFamily:{
        montserrat: ['Montserrat']
      },
      colors: {
        brightRed: '#1d4ed8',
        brightRedLight: '#60a5fa',
        brightRedSuperLight: '#f0f9ff',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(223, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLighGray: 'hsl(0, 0%, 98%)',
      }
    },
  },
  plugins: [],
}


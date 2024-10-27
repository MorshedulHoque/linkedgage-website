/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'lightBlue': '#0ea5e9',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
      },
      animation: {
        'border-width': 'border-width 3s infinite alternate',
        rotate: 'rotate 10s linear infinite', // Added rotate animation
      },
      keyframes: {
        'border-width': {
          'from': {
            width: '10px',
            opacity: '0',
          },
          'to': {
            width: '100px',
            opacity: '1',
          },
        },
        rotate: { // Added rotate keyframes
          '0%': { transform: 'rotate(0deg) scale(10)' },
          '100%': { transform: 'rotate(-360deg) scale(10)' },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};

/** @type {import('tailwindcss').Config} */

import tailwindcssAnimated from 'tailwindcss-animated';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  
  theme: {
    extend: {
        colors: {
          blueText: '#033649',
          blueButton: '#004e64',
        },
    },
  },
  plugins: [
    tailwindcssAnimated
  ],
}


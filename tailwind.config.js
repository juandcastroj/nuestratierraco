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
   fontFamily: {
        TTmilks: ["TTmilks", "ui-sans-serif"], 
        BubbleboddyNeue: ["BubbleboddyNeue", "ui-sans-serif"], 
        OpunMai: ["OpunMai", "ui-sans-serif"], 
      },
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


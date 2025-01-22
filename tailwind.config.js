/** @type {import('tailwindcss').Config} */
import require from 'tailwindcss/require'
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
        darkmode:'#282323'
      }
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
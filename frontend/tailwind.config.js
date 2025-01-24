/** @type {import('tailwindcss').Config} */
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
        primary: "var(--primary)",
        background: "var(--background)",
        text: "var(--text)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
}
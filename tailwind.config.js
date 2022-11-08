/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      keyframes: {
        progress: {
          '0%': { width: '0',opacity : '1' },
          '100%': { opacity: '1' },
        }
      },
     
    },
  },
  plugins: [],
}

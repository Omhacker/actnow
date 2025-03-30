/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure this includes all your files
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        merriweather: ["var(--font-merriweather)", "serif"],
        raleway: ["var(--font-raleway)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

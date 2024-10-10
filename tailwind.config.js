/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        deepPink: '#823555',
        lightBeige: '#bd7c81',
      },

      fontFamily: {
        'manrope': ["Manrope", "sans-serif"],
        'popins': ['"Poppins"', ...['sans-serif']],
      },
    },
  },
  plugins: [],
};

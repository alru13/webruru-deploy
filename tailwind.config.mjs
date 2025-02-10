/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        
    },
    colors: {
      color: {
        primary: '#eeeeee',
        header: '#08a0ff',
        secondary: '#f0f8ff',
        dark: '#000147',
        gray: '#d3d3d3'
    },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#003C5F',
        secondary: '#175641',
      },
      backgroundColor: {
        primary: '#111111',
        secondary: '#FAFAFA',
        btnPrimary: '#223041',
        btnSecondary: '#F2F2F2',
        hoverPrimary: '#2e3c4d',
        hoverSecondary: '#ffffff'
      },
      textColor: {
        primary: '#F2F2F2',
        secondary: '#051119',
        'primary-text': '#003C5F',
        'secondary-text': '#175641'
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/_components/**/*.{js,ts,jsx,tsx}',
    './app/(auth)/**/*.{js,ts,jsx,tsx}',
    './app/contact/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{html}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

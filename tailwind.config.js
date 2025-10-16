/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./apps/**/*.{js,ts,jsx,tsx,mdx}",
    "./apps/**/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./apps/**/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./apps/**/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./libs/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

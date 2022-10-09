/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      poppin: ["Poppins"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

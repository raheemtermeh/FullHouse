/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        textPrimary: "#ffffff",
      },
      fontFamily: {
        iranianSans: ["IranianSans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

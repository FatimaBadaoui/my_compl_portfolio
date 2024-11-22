/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#250b49",
        whitish: "#feecff",
        primary: {
          100: "#fcd5ff",
          200: "#ddbded",
          300: "#f20fe2",
          400: "#d054d0",
          500: "#a855f7",
          600: "#600778",
        },
      },
    },
  },
  plugins: [],
};

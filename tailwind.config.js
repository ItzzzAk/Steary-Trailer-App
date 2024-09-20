/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "below-1366": { max: "1366px" }, // Custom breakpoint for 1366px or smaller
      },
    },
  },
  plugins: [],
};

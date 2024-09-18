/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'Trailer1': "url('https://i.pinimg.com/736x/50/f0/37/50f03756eb957fff6c5d0e1e8e454259.jpg')",
        'Trailer2': "url('https://i.pinimg.com/736x/92/e5/19/92e5199efed4183b021d67bcc230c9b7.jpg')"
      }
    },
  },
  plugins: [],
}
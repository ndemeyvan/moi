/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home': "url('/src/assets/travis.jpg')",
        'android': "url('/src/assets/android.png')",
        'flutter': "url('/src/assets/flutter.png')",


      }
    },
  },
  plugins: [],
}
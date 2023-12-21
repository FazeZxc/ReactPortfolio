/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'NeueMontreal-Regular': ['NeueMontreal-Regular', 'sans-serif']
      },
      colors: {
        'hero-ground': '#999D9E',
        'hero-black': '#1C1D20',
      },
      backgroundImage: {
        'hero-person': "url('src/assets/media/DSC07033.jpg'))",
      }
    },
  },
  plugins: [],
}


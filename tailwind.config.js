/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'rainbow-purple': 'linear-gradient(to right, #FF0000, #FF00FF, #8B00FF, #4B0082, #6A0DAD, #9400D3, #8A2BE2)',
      },
    },
  },
  plugins: [],
}


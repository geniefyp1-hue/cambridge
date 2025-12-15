/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cambridgeBlue: '#0A2540',
        cambridgeGold: '#B08C2E',
        cambridgeLightBlue: '#1E40AF',
        cambridgeGrey: '#F3F4F6',
        cambridgeDarkGrey: '#4B5563',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/hero-cambridge.webp')",
      }
    },
  },
  plugins: [],
}

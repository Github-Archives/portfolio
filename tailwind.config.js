/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // Putting styles overrides everything, not just add your new values
    extend: {
      colors: {
        'twitter-blue': '#1DA1F2',
      },
    },
  },
  plugins: [],
}

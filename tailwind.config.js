/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm':'150px',
      // => @media (min-width: 640px) { Mobile }
      'ssm':'400px',

      'mmd':'700px',
      'md': '826px',
      // => @media (min-width: 640px) { TABLET}

      'xl': '1024px',
      // => @media (min-width: 1024px) { LAPTOP }

      'xxl': '1281px',
      // => @media (min-width: 1280px) { DESKTOP }
      'xxxl': '1800px',
      // => @media (min-width: 1280px) { DESKTOP }
    },
    extend: {
      backgroundImage: {
        'n1': "url('/images/12.jpg')",
      }
    },
  },
  plugins: [],
}


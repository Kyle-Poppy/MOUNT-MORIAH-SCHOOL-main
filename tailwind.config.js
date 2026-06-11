/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F0F4F9',
          100: '#D9E5F0',
          200: '#B8CEDE',
          300: '#6B96C4',
          400: '#1E5BA8',
          500: '#003D7A',
          600: '#003570',
          700: '#002D5F',
          800: '#002349',
          900: '#001A36',
        },
        accent: {
          50: '#FEF3F3',
          100: '#FCE0E0',
          200: '#F9BFBF',
          300: '#F28F8F',
          400: '#E74C3C',
          500: '#E74C3C',
          600: '#D43F2E',
          700: '#B83826',
          800: '#8E2A1A',
          900: '#641D0E',
        },
        secondary: {
          50: '#FFF9F5',
          100: '#FFF1E6',
          200: '#FFE0CC',
          300: '#FFC999',
          400: '#FFB366',
          500: '#FF9933',
          600: '#E68A2E',
          700: '#CC7A26',
          800: '#996B20',
          900: '#664614',
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

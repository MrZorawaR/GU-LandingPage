/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef1f8',
          100: '#d5dced',
          200: '#b8c4e1',
          300: '#9aacd5',
          400: '#7e96cb',
          500: '#5f7fbf',
          600: '#243873',
          700: '#1e2f60',
          800: '#17254d',
          900: '#111b3a'
        },
        accent: {
          50: '#fff4ea',
          100: '#ffe4cd',
          200: '#ffc999',
          300: '#ffad66',
          400: '#ff9338',
          500: '#F07E1D',
          600: '#d96f18',
          700: '#b85c14',
          800: '#94480f',
          900: '#70340b'
        },
        neutral: {
          50: '#f8f9fa',
          100: '#f1f3f5',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#6c757d',
          700: '#495057',
          800: '#343a40',
          900: '#1a1a2e'
        },
      },
      fontFamily: {
        heading: ['"Zilla Slab"', 'serif'],
        body: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

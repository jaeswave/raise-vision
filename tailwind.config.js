/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: { 900: '#001F4D', 800: '#002D6E', 700: '#003380', 600: '#004099' },
        forest: { 600: '#1E7A45', 500: '#2E8B57', 400: '#3BA068' },
        steel: { 900: '#0D1117', 800: '#161B22', 700: '#21262D' },
        gold: { 500: '#C9922A', 400: '#E0A830' },
        slate: { 50: '#F8FAFC' }
      },
      fontFamily: {
        display: ['"Barlow Condensed"', '"Arial Narrow"', 'sans-serif'],
        heading: ['"Barlow Semi Condensed"', 'Helvetica', 'sans-serif'],
        body: ['"Barlow"', 'Helvetica', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease both',
        'fade-in': 'fadeIn 0.6s ease both',
        'counter': 'counterUp 2s ease both',
        'slide-right': 'slideRight 0.7s ease both',
      },
      keyframes: {
        fadeUp: { '0%': { opacity: 0, transform: 'translateY(32px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
        fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        slideRight: { '0%': { opacity: 0, transform: 'translateX(-32px)' }, '100%': { opacity: 1, transform: 'translateX(0)' } },
      }
    }
  },
  plugins: []
}

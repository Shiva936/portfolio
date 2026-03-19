/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: {
          900: '#030712',
          800: '#071025',
          700: '#0a1c39',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(148, 163, 184, 0.1), 0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-40rem 0' },
          '100%': { backgroundPosition: '40rem 0' },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        shimmer: 'shimmer 1.8s linear infinite',
        'fade-in': 'fadeIn 0.6s ease-out both',
      },
    },
  },
  plugins: [],
}


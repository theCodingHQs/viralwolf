/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        wolf: {
          950: '#07080B',
          900: '#0D0F15',
          850: '#12151E',
          800: '#191D28',
          750: '#212635',
          700: '#2E3547',
          600: '#47516B',
          500: '#687594',
          400: '#94A1BF',
          300: '#CBD5E1',
          200: '#E2E8F0',
          100: '#F8FAFC',
        },
        gold: {
          50: '#FFFDF5',
          100: '#FBF5DC',
          200: '#F6EAB9',
          300: '#EEDC8D',
          400: '#E5CB62',
          500: '#D4AF37', // Brand Primary Gold
          600: '#BA8D1E',
          700: '#946C12',
          800: '#6E4D09',
          900: '#473003',
          950: '#2A1B01',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        syne: ['"Syne"', 'sans-serif'],
        display: ['"Cinzel"', '"Syne"', 'serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F6EAB9 0%, #D4AF37 50%, #946C12 100%)',
        'gold-gradient-soft': 'linear-gradient(135deg, rgba(212,175,55,0.15) 0%, rgba(212,175,55,0.03) 100%)',
        'dark-mesh': 'radial-gradient(circle at 50% 0%, rgba(212,175,55,0.12) 0%, rgba(13,15,21,0.95) 70%)',
      },
      boxShadow: {
        'gold-sm': '0 0 15px -3px rgba(212, 175, 55, 0.2)',
        'gold-md': '0 0 25px -4px rgba(212, 175, 55, 0.3)',
        'gold-lg': '0 0 40px -5px rgba(212, 175, 55, 0.35)',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      },
      animation: {
        shimmer: 'shimmer 6s infinite linear',
        float: 'float 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

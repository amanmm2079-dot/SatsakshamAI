/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0F2747',
          50: '#16213A',
          100: '#1A2540',
          200: '#243352',
          300: '#758DB8',
          400: '#4767A0',
          500: '#2A4A7E',
          600: '#1F3A66',
          700: '#162D4F',
          800: '#0F2747',
          900: '#0A1B33',
        },
        brand: {
          DEFAULT: '#3B82F6',
          50: '#0D1729',
          100: '#102041',
          200: '#1E3A8A',
          300: '#60A5FA',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        ai: {
          DEFAULT: '#818CF8',
          50: '#1E1B4B',
          100: '#312E81',
          200: '#3730A3',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
        },
        success: {
          DEFAULT: '#34D399',
          50: '#052E1B',
          100: '#064E3B',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
        },
        warning: {
          DEFAULT: '#FBBF24',
          50: '#451A03',
          100: '#78350F',
          500: '#F59E0B',
          600: '#D97706',
        },
        error: {
          DEFAULT: '#F87171',
          50: '#450A0A',
          100: '#7F1D1D',
          500: '#EF4444',
          600: '#DC2626',
        },
        surface: '#111B30',
        'surface-2': '#16213A',
        bg: '#0A1124',
        ink: {
          DEFAULT: '#F1F5F9',
          muted: '#94A3B8',
        },
        border: {
          DEFAULT: '#1E2A42',
        },
        saffron: {
          DEFAULT: '#FB923C',
          50: '#2A1608',
          100: '#431407',
          500: '#F97316',
          600: '#EA580C',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: '0.875rem',
        '2xl': '1.125rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        soft: '0 1px 3px 0 rgb(0 0 0 / 0.3), 0 1px 2px -1px rgb(0 0 0 / 0.2)',
        card: '0 2px 8px -2px rgb(0 0 0 / 0.4), 0 4px 16px -4px rgb(0 0 0 / 0.3)',
        elevated: '0 8px 32px -8px rgb(0 0 0 / 0.5), 0 4px 16px -4px rgb(0 0 0 / 0.3)',
        glow: '0 0 0 1px rgb(99 102 241 / 0.15), 0 8px 24px -8px rgb(99 102 241 / 0.25)',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'count-up': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'progress-fill': {
          '0%': { width: '0%' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'scale-in': 'scale-in 0.4s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.5s ease-out forwards',
        'slide-up': 'slide-up 0.3s ease-out forwards',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
    },
  },
  plugins: [],
};

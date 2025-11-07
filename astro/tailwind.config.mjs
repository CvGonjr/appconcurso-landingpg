/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(212, 85%, 45%)',
          foreground: 'hsl(0, 0%, 100%)',
          dark: '#0056b3',
          light: '#4da3ff',
        },
        secondary: {
          DEFAULT: 'hsl(210, 15%, 96%)',
          foreground: 'hsl(215, 25%, 15%)',
          dark: '#00c853',
        },
        accent: {
          DEFAULT: 'hsl(172, 70%, 45%)',
          foreground: 'hsl(0, 0%, 100%)',
          gold: '#ffd700',
          purple: '#9c27b0',
        },
        background: 'hsl(0, 0%, 100%)',
        foreground: 'hsl(215, 25%, 15%)',
        muted: {
          DEFAULT: 'hsl(210, 15%, 96%)',
          foreground: 'hsl(215, 15%, 45%)',
        },
        border: 'hsl(215, 15%, 90%)',
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out',
        'fade-in-up': 'fade-in-up 0.8s ease-out',
        float: 'float 3s ease-in-out infinite',
      },
      boxShadow: {
        'futuristic': '0 5px 15px rgba(0, 0, 0, 0.08)',
        'futuristic-hover': '0 8px 20px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}

import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0a0a0a',
          card: '#111111',
          elevated: '#161616',
          subtle: '#1a1a1a',
        },
        gold: {
          DEFAULT: '#c8a97e',
          light: '#d4ba94',
          dark: '#a07840',
        },
        cream: '#f5f0ea',
        line: {
          DEFAULT: 'rgba(255,255,255,0.06)',
          hover: 'rgba(255,255,255,0.12)',
        },
        muted: {
          DEFAULT: 'rgba(255,255,255,0.55)',
          faint: 'rgba(255,255,255,0.3)',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        label: '0.2em',
        btn: '0.15em',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)',
        premiumOut: 'cubic-bezier(0, 0, 0.2, 1)',
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        heroZoom: 'heroZoom 20s ease-out forwards',
        scrollLine: 'scrollLine 2s cubic-bezier(0.22, 1, 0.36, 1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        heroZoom: {
          from: { transform: 'scale(1.08)' },
          to: { transform: 'scale(1)' },
        },
        scrollLine: {
          '0%': { transform: 'scaleY(0)', transformOrigin: 'top' },
          '50%': { transform: 'scaleY(1)', transformOrigin: 'top' },
          '51%': { transform: 'scaleY(1)', transformOrigin: 'bottom' },
          '100%': { transform: 'scaleY(0)', transformOrigin: 'bottom' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

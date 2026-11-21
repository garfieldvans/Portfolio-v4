import tailwindcssAnimated from 'tailwindcss-animated';
import tailwindScrollbar from 'tailwind-scrollbar';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk Variable"', '"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        ink: '#0A0A0A',
        surface: '#111111',
        elevated: '#161616',
        line: 'rgba(255,255,255,0.09)',
        cream: '#F4F4F0',
        muted: '#9C9C98',
        accent: '#C8FF4D',
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      keyframes: {
        'rotate-90-cw': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(90deg)' },
        },
      },
      animation: {
        'rotate-90-cw': 'rotate-90-cw 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover'],
    },
  },
  plugins: [
    tailwindcssAnimated,
    tailwindScrollbar,
  ],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
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
    require('tailwindcss-animated'),
    require('tailwind-scrollbar'),
  ],
}
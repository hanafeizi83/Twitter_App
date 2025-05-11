/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

function withOpacity(nameValue) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${nameValue}),${opacityValue})`
    }
    return `rgb(var(${nameValue}))`
  }
}
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true
      },
      colors: {
        secondary: {
          0: withOpacity('--color-secondary-0'),
          50: withOpacity('--color-secondary-50'),
          100: withOpacity('--color-secondary-100'),
          200: withOpacity('--color-secondary-200'),
          300: withOpacity('--color-secondary-300'),
          400: withOpacity('--color-secondary-400'),
          500: withOpacity('--color-secondary-500'),
          600: withOpacity('--color-secondary-600'),
          700: withOpacity('--color-secondary-700'),
          800: withOpacity('--color-secondary-800'),
          900: withOpacity('--color-secondary-900')
        },
        primary: {
          100: withOpacity('--color-primary-100'),
          200: withOpacity('--color-primary-200'),
          300: withOpacity('--color-primary-300'),
          400: withOpacity('--color-primary-400'),
          500: withOpacity('--color-primary-500'),
          600: withOpacity('--color-primary-600'),
          700: withOpacity('--color-primary-700'),
          800: withOpacity('--color-primary-800'),
          900: withOpacity('--color-primary-900')
        }
      }
    },
  },
  plugins: [daisyui],
}
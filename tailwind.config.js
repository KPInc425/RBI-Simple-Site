import daisyui from "daisyui"
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      'xs': ['0.75rem', {
        lineHeight: '1rem',
      }],
      'sm': ['0.875rem', {
        lineHeight: '1.25rem',
      }],
      'base': ['1rem', {
        lineHeight: '1.5rem',
      }],
      'lg': ['1.125rem', {
        lineHeight: '1.75rem',
      }],
      'xl': ['1.25rem', {
        lineHeight: '1.75rem',
      }],
      '2xl': ['1.5rem', {
        lineHeight: '2rem',
      }],
      '3xl': ['1.875rem', {
        lineHeight: '2.25rem',
      }],
      '4xl': ['2.25rem', {
        lineHeight: '2.5rem',
      }],
      '5xl': ['3rem', {
        lineHeight: '1.25',
      }],
      '6xl': ['3.75rem', {
        lineHeight: '1.35',
      }],
      '7xl': ['4.5rem', {
        lineHeight: '1.35',
      }],
      '8xl': ['6rem', {
        lineHeight: '1.35',
      }],
      '9xl': ['8rem', {
        lineHeight: '1.35',
      }],
    },
    extend: {},
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: true,
    darkTheme: "dark",
  }
}


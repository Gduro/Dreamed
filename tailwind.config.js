/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: "var(--step--2)",
        sm: "var(--step--1)",
        base: "var(--step-0)",
        xl: "var(--step-1)",
        "2xl": "var(--step-2)",
        "3xl": "var(--step-3)",
        "4xl": "var(--step-4)",
        "5xl": "var(--step-5)",
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
}
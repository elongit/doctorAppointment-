/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#0ea5e9",
      
        "secondary-color": "#0284c7",
      },
      fontFamily: {
        Inter: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

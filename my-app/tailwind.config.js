/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#3b82f6",
        "secondary-color": "#2563eb",
      },
      fontFamily: {
        Inter: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

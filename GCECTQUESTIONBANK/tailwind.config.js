/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-100": "#CAF0F8",
        "primary-200": "#90E0EF",
        "primary-300": "#0086CF",
        "primary-400": "#023E8A",
        "primary-500": "#03045E",
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Monserrat", "sans-serif"],
      },
      keyframes: {
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOutRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOutLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        slideInRight: 'slideInRight 0.5s ease-in-out',
        slideOutRight: 'slideOutRight 0.5s ease-in-out',
        slideInLeft: 'slideInLeft 0.5s ease-in-out',
        slideOutLeft: 'slideOutLeft 0.5s ease-in-out',
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1300px",
    }
  },
  plugins: [],
}


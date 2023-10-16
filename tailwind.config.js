/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "t-",
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      fontSize: {
        10: "10px",
        12: "12px",
        14: "14px",
        15: "15px",
        16: "16px",
        24: "24px",
        50: "50px",
      },
      colors: {
        home: "#e9e9e9",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        ab: ["ABeeZee", "sans-serif"],
        os: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

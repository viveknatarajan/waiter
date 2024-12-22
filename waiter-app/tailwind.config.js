/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#DDA15E",
      },
      backgroundImage: {
        "login-Image": "url(/images/login.png)",
      },
    },
  },
  plugins: [],
};

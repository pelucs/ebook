/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Poppins, sans-serif"
      },
      backgroundImage: {
        bgY: "url('./public/bg-y.jpg')",
        bgX: "url('./public/bg-x.jpg')"
      },
      colors: {
        green: {
          primary: "#27AE60",
          secundary: "#00ED64"
        },
        browm: {
          primary: "#987039",
          secundary: "#714B18"
        }
      }
    },
  },
  plugins: [],
}

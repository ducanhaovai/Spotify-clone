/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        homepage: "url('./src/assets/img/anhdoinui.png')",
      },
      width: {
        "100rem": "100rem",
      },
      height: {
        "49.25rem": "49.25rem",
        "788px": "788px",
      },
    },
  },
  plugins: [],
};

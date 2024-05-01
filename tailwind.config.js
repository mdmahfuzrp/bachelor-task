/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e1e1e",
        secondary: "#666",
        special: "#a5d8ff",
        special_hover: "#a5d8ff",
        light50: "#f1f2fa",
        light100: "#dee0f2",
      },
      borderColor: {
        primary: "#9993",
        black: "#1C2120",
      },
      backgroundColor: {
        light50: "#f1f2fa",
        light100: "#dee0f2",
        special: "#a5d8ff",
        header_bg: "#f0eff5",
        special_hover: "#a5d8ff",
        banner_bg: "#F2F6FE",
        c_green: "#b2f2bb",
        c_yellow: "#ffec99",
        c_special: "#a5d8ff",
        c_danger: "#fa5252",
        c_pink: "#ffc9c9",
      },
      fontFamily: {
        special_font: '"Rowdies", sans-serif',
      },
    },
  },
  plugins: [],
};

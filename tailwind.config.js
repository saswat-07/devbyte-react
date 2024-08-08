/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // custom fonts (don't need to specify font weight)
        // robo_bold: ["CustomFontBlack", "sans-serif"],
        robobold: ["CustomFontRobotoBold", "sans-serif"],
        robomedium: ["CustomFontRobotoMedium", "sans-serif"],
        roboregular: ["CustomFontRobotoRegular", "sans-serif"],
        // google fonts (required to specify font weight according to google font docs)
        lato: ["Lato", "sans-serif"],
        notosans: ["Noto Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

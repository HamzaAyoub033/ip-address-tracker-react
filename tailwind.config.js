/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        very_dark_gray: "hsl(0,0%,17%)",
        Dark_Gray: "hsl(0, 0%, 59%)",
      },
      backgroundImage: {
        "hero-desktop": "url('/images/pattern-bg-desktop.jpg')",
  "hero-mobile": "url('/images/pattern-bg-mobile.jpg')",
      },
      fontFamily: {
        "font-family": ["Rubik", "sans-serif"],
      },
      fontWeight: {
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
    },
  },
  plugins: [],
};


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gap: {
        "104px": "104px",
      },
      boxShadow: {
        br2xl: "-10px 10px 5px -5px rgba(0, 0, 0, 0.25)",
        b2xl: "0px 10px 10px -5px rgba(0, 0, 0, 0.25)",
        // br2xl:'0px 12px 50px -12px rgba(0, 0, 0, 0.25)',
        try: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      },
      padding: {
        70: "70px",
      },
      colors: {
        base: "#F6DFBF",
        primary: "#D15640",
        secondary: "#98B4A8",
        tertiary: "#486B5C",
        btnColor: "#A53860",
      },
      screens: {
        wideplus: "2000px",
        wide: "1440px",
        medium: "1225px",
        navscreen: "1090px",
        small: "950px",
        tablet: "835px",
        extrasmall: "740px",
        mobileplus: "470px",
        mobile: "394px",
      },
    },
  },
  plugins: [],
};

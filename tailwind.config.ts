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
        sun: 'url("/hero_circle.svg")',
        football: 'url("/hero_football.svg")',
      },
      gap: {
        "104px": "104px",
      },
      boxShadow: {
        bl2xl: "-10px 10px 5px -5px rgba(0, 0, 0, 0.25)",
        b2xl: "0px 10px 10px -5px rgba(0, 0, 0, 0.25)",
        b3xl: "0px 20px 20px -5px rgba(0, 0, 0, 0.25)",
        // br2xl:'0px 12px 50px -12px rgba(0, 0, 0, 0.25)',
        try: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      },
      padding: {
        70: "70px",
      },
      fontSize: {
        md: ["16px", "normal"],
        xl: ["20px", "normal"],
        "2xl": ["24px", "normal"],
        "3xl": ["30px", "normal"],
        "4xl": ["32px", "normal"],
        "5xl": ["40px", "normal"],
        hero: ["64px", "normal"],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        semibold: 600,
        bold: 700,
      },
      colors: {
        base: "#FEEFDD",
        primary: "#E3712E",
        secondary: "#467AD4",
        tertiary: "#56B7CB",
        quaternary: "#DF4894",
        fifth: "#434A42",
        btnColor: "#A53860",
      },
      screens: {
        wideplus: "2000px",
        wide: "1440px",
        medium: "1225px",
        smallplus: "1090px",
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

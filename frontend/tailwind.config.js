export default {

  darkMode: "class", // 🔥 THIS WAS MISSING

  content: [
    
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        purple: {
          1000: "#12001f", // or your exact dark purple
        },
        screens: {
          'xl2': '1440px', // custom breakpoint
        },
      },
    },

  },
  plugins: [],
};

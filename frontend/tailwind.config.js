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
      },
      animation: {
    spinSlow: "spin 6s linear infinite",
  },
    },

  },
  plugins: [],
};

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        transform: "transform",
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      backfaceVisibility: ["responsive"],
      transform: ["responsive"],
    },
  },
};

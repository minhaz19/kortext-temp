module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        "6.5xl": "64px",
      },
      colors: {
        primary: "#7370FB",
        secondary: "#F9B430",
        button: '#572bd9',
        background_purple: '#4f29bf',
        background_card: '#4f29bf',
        background_card_item: '#6837fa',
        textColor: '#7e92ac',
      },
      scale: {
        200: "2",
      },
      fontFamily: {
        'open-sans' : ['Open Sans', 'sans-serif']
      },
      height: {
        '700px': '700px',
        '500px': '500px',
        '3000px': '3000px',
        '900px': '900px'
      },
      width: {
        '3000px': '3000px',
        '900px': '900px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

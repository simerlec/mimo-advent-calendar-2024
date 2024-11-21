const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 20s linear infinite",
      },
      colors: {
        product2: {
          background: {
            dark: "#191B33",
            primary: "#252746",
            secondary: "#333661",
            tertiary: "#4A4D85",
            accent: "#8D60E2",
            accentLight: "#B89CED",
            accentDark: "#7E4BDE",
            error: "#DD4A5D",
            inverse: "#FFFFFF",
          },
          button: {
            primary: { enabled: "#8D60E2", hovered: "#7E4BDE" },
            secondary: { enabled: "#ffffff", hovered: "#EDEEF6" },
          },
          border: {
            primary: "#3F4273",
            secondary: "#4A4D85",
            tertiary: "#333661",
            accent: "#8D60E2",
            accentLight: "#B89CED",
          },
          content: {
            primary: "#FFFFFF",
            secondary: "#B9BBD2",
            inverse: "#252746",
            accent: "#7E4BDE",
            accentLight: "#B89CED",
            disabled: "#FFFFFF4D",
          },
          accent: {
            info: "#89C8FF",
            success: "#A4E59B",
            important: "#B89CED",
            warning: "#F8E08E",
            error: "#F6A0AC",
          },
          green: {
            300: "#A4E59B",
            400: "#78D86B",
          },
          purple: {
            300: "#B89CED",
            400: "#9C75E6",
          },
          yellow: {
            300: "#F8E08E",
            700: "#A5820B",
          },
          blue: {
            300: "#89C8FF",
            600: "#007DEA",
          },
        },
      },
    },
  },
  plugins: [],
};

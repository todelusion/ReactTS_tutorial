module.exports = {
  content: ["./index.html", "./src/**/*.{ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        loader: "loader 0.6s infinite alternate",
      },
      keyframes: {
        loader: {
          to: {
            opacity: 0.1,
            transform: "translate3d(0, -1rem, 0)",
          },
        },
      },
      screens: {
        xs: "384px",
      },
      fontSize: {
        "4.5xl": "2.5rem",
        "5.5xl": "3.5rem",
      },
      colors: {
        primary: "#FFB423",
        primary_A11y: "#332200",
        primary_Dark: "#B27600",
        second: "#6E7D00",
        second_dark: "#313800",
        accent: "#B9C850",
        neutral: "#F5F5F5",
      },
      padding: {
        3.5: "0.875rem",
      },
      spacing: {
        18: "4.5rem",
        42: "10.5rem",
        70: "17.5rem",
        100: "25rem",
        120: "30rem",
        160: "40rem",
      },
    },
    fontFamily: {
      sans: ["Noto Sans TC", "Roboto"],
      serif: ["Noto Serif TC", "Times"],
      dela: ["Dela Gothic One"],
    },
  },
};

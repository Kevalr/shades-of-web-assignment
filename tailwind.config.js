/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        heading: ["Martel Sans", "sans-serif"],
      },
      colors: {
        primary: "#887C68",
        "light-bg": "#F8F8F8",
      },
      maxWidth: {
        container: "1200px",
      },
      fontSize: {
        heading: [
          "1.875rem",
          {
            lineHeight: "2.25rem",
            fontWeight: "600",
          },
        ],
        "heading-mobile": [
          "1.25rem",
          {
            lineHeight: "1.75rem",
            fontWeight: "600",
          },
        ],
      },
      padding: {
        section: "2.5rem",
      },
      gap: {
        card: "2.5rem",
      },
      gridTemplateColumns: {
        desktop: "repeat(3, minmax(0, 1fr))",
        tablet: "repeat(2, minmax(0, 1fr))",
        mobile: "repeat(1, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};

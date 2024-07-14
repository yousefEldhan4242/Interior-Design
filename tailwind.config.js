/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      padding: {
        "main-padding": "100px",
      },
      filter: {
        "custom-sepia-saturate-hue": "invert(100%) brightness(1000%)",
      },
      fontSize: {
        responsive: "clamp(60px, 80px, 100px)",
        "input-responsive": "clamp(14px, 16px, 18px)",
      },
      screens: {
        big: "1200px", // Default large breakpoint
      },
      colors: {
        "main-color": "#1F1F1F",
        "secondary-color": "#545454",
      },
      animation: {
        "go-down": "go-down 0.6s linear infinite",
        "go-right": "go-right 0.5s linear infinite",
        "go-left": "go-left 0.5s linear infinite",
        "go-up": "go-up 0.5s linear infinite",
      },
      keyframes: {
        "go-down": { "100%": { transform: "translatey(10px)" } },
        "go-right": { "100%": { transform: "translatex(5px)" } },
        "go-left": { "100%": { transform: "translatex(-5px)" } },
        "go-up": { "100%": { bottom: "20px" } },
      },
      backgroundImage: {
        "instagram-gradient":
          "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-filters")],
};

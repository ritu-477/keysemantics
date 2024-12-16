/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1240px",
        },
      },

      colors: {
        'navy-blue': "#191A42",
        'soft-indigo': "#7C7EB9",
        'lavender-mist': "#ECE8F8",
        'ice-blue': "#E3F7FA",
        'pastel-pink': "#FCE7EF",
        'ice-white': "#f7f9fb",
        'gray': "#C9CAD4",
        'purple': "#24254B",
        'sky-blue': "#48C3D7",
        'dark-blue':"#111235"
      },

      fontSize: {
        'custom-base': "10px",
        'custom-xl': "32px",
        'custom-2xl': "64px",
      },

      lineHeight: {
        'custom-base': "14px",
        'custom-xl': "19.5px",
        'custom-2xl': "60px",
        'custom-3xl': "67px",
        'custom-4xl': "72px",
      },

      backgroundImage: {
        'hero-bg': "url('/public/assets/images/webp/hero-bg.webp')",
      },

    },
  },
  plugins: [],
};


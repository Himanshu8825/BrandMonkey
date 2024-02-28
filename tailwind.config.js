/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bm-primary": "#f5cd15",
        "bm-ter2": "#fff",
        "bm-ter1": "#f9f9f9",
        "bm-secondry": "#000",
        "base-gray-40": "#b5bec6",
        "bm-ter3": "rgba(217, 217, 217, 0.5)",
        "base-gray-80": "#4a5660",
        "secondary-100": "#f04d23",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
        poppins: "Poppins",
        inherit: "inherit",
        inter: "Inter",
        h5: "'Avenir Next LT Pro'",
      },
      borderRadius: {
        "6xl": "25px",
        "8xl-9": "27.9px",
        "10xl": "29px",
      },
      borderColor: (theme) => ({
        "bm-primary": theme("colors.bm-primary"),
        // Define other custom border colors here if needed
      }),
    },
    fontSize: {
      base: "1rem",
      sm: "0.875rem",
      "3xl": "1.375rem",
      mini: "0.938rem",
      lg: "1.125rem",
      xs: "0.75rem",
      xl: "1.25rem",
      "16xl": "2.188rem",
      "3xs": "0.625rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};

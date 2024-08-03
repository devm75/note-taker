/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mob: { max: "480px" },
      tab: { min: "481px", max: "768px" },
      "tab-high": { min: "769px", max: "1024px" },
      responsive: { max: "1024px" },
      web: { min: "1025px" },
      "desk-low-res": { min: "1025px", max: "1366px" },
      "desk-high-res": { min: "1367px", max: "1600px" },
      "desk-hd-res": { min: "1601px" },
      "full-hd": "1980px",
    },
    extend: {
      colors: {
        // 'light-primary': "#28A745",
        // blue
        "light-primary": "#378abd",
        "light-secondary": "#FFFFFF",
        // green
        "light-primary-2": "#80cc28",
        // gray
        "light-primary-3": "#9370db",
        // black

        "light-primary-4": "#000000",
        "light-primary-5": "#e6eaf8",
        "light-primary-6": "d1e4dd",
        "dark-primary": "#80cc28",
        "dark-secondary": "#66FF99",
        "dark-text-pri": "#E0E0E0",
        "dark-text-sec": "#B3B3B3",
        "light-text-pri": "#FFFFFF",
        "light-text-sec": "#666666",
      },

      height: {
        "700px": "700px",
      },
      width: {
        "1980px": "1980px",
        "800px": "800px",
        "600px": "600px",
        "400px": "400px",
        "720px": "720px",
        "310px": "310px",
        '520px': '520px'
      },
      zIndex: {
        900: "900",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        480: '480px'
      },
      minWidth: {
        480: '480px',
        320: '320px',
        260: '260px',
        100: '100px'
      }
    },
  },
  plugins: [],
};

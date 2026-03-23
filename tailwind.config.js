/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF8A00",
        "primary-dark": "#E67E00",
        "primary-light": "#FFB84D",
        secondary: "#FFC107",
        accent: "#4CAF50",
        "soft-green": "#E8F5E9",
        "soft-yellow": "#FFF9E6",
        "soft-red": "#FFEBEE",
        neutral: "#F5F5F5",
        "neutral-light": "#FAFAFA",
        "text-primary": "#0F172A",
        "text-secondary": "#64748B",
      },
      borderRadius: {
        "2xl": "20px",
        "3xl": "24px",
      },
      boxShadow: {
        subtle: "0 2px 8px rgba(0, 0, 0, 0.08)",
        card: "0 4px 12px rgba(0, 0, 0, 0.1)",
        soft: "0 1px 4px rgba(0, 0, 0, 0.05)",
      },
      fontSize: {
        "1.5xl": "1.375rem",
      },
    },
  },
  plugins: [],
}

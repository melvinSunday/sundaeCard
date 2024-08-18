/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      font: {
        derivia: ["derivia"],
        jost: ["jost"],
        objectivity: ["objectivity"],
        nunito: ["nunito"],
        noto: ["Noto Sans"],
        inter: ["Inter"],
        gothic: ["Century Gothic"],
      },
      animation: {
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
      },
      keyframes: {
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
      },
    },
  },
  plugins: [],
};

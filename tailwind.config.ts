import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import typography from "@tailwindcss/typography"

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        cloudburst: {
          "50": "#f2f5fc",
          "100": "#e1e8f8",
          "200": "#cad7f3",
          "300": "#a5beeb",
          "400": "#7a9ce0",
          "500": "#5b7bd6",
          "600": "#4760c9",
          "700": "#3d4eb8",
          "800": "#374296",
          "900": "#303a78",
          "950": "#262b54",
        },
      },
    },
  },
  plugins:[
    typography
  ]
};

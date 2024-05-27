import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
      },
      colors: {
        "primary-blue": "#150050",
        "primary-yellow": "#FFE377",
        "primary-green": "#00CC61",
        "light-green": "#EBFBF3",
        "dark-green": "#004050",
        "light-gray": "#F4F4F4",
        "medium-gray": "#3B3A40",
        "dark-gray": "#404040",
        "border-grey": "#787878",
        "blue": "#150050",
        "stroke": "#DCDCDC",
        "card-blue": "#200b58",
      },
    },
  },
  plugins: [],
};
export default config;

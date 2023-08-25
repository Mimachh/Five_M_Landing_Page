import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {


    },
    colors: {
      dark: "#1b1b1b",
      light: "#f5f5f5",
      primary: "#1DA1F2", // 240,86,199
      primaryDark: "#58E6D9", // 80,230,217
    }
  },
  plugins: [],
}
export default config

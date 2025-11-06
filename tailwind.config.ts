import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "slide1": "url('/img/banner.png')",
            },
            fontFamily: {
                bodoni: ['var(--font-bodoni)'],
            },
            colors: {
                yellow: {
                    "300": "#f0e953",
                    "500": "#c1a507",
                },
                
            },
        },
        plugins: [],

    },
}
export default config;
import type { Config } from "tailwindcss";

export default {
    content: ["./app/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                "sans": ["Outfit", "sans-serif"],
                "cal-sans": ["Cal Sans"],
            },
        },
    },
    plugins: [],
} satisfies Config


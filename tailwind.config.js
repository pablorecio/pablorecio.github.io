/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                border: "#1B2330",
                input: "#1B2330",
                ring: "#22FF88",
                background: "#0E1116",
                foreground: "#E6E6E6",
                primary: {
                    DEFAULT: "#22FF88",
                    foreground: "#0B0F14",
                },
                secondary: {
                    DEFAULT: "#0B0F14",
                    foreground: "#22FF88",
                },
                muted: {
                    DEFAULT: "#0B0F14",
                    foreground: "#9AA4AF",
                },
                accent: {
                    DEFAULT: "#22FF88",
                    foreground: "#0B0F14",
                },
                card: {
                    DEFAULT: "#11161D",
                    foreground: "#E6E6E6",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
            },
            borderRadius: {
                lg: "0.5rem",
                md: "calc(0.5rem - 2px)",
                sm: "calc(0.5rem - 4px)",
            },
            fontFamily: {
                mono: ['JetBrains Mono', 'Menlo', 'Consolas', 'monospace'],
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
}

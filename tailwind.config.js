/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
            light: "#eaebe6",
            dark: "#242424",
            bright: "#f25f5c",
            white: "#fff",
            black: "#000",
            white_transparent: "#ffffffb0",
        },
        extend: {
            backgroundImage: {
                "hero-background":
                    "url('./src/assets/backgrounds/about_bg_cut.jpg')",
                "journey-background":
                    "url('./src/assets/backgrounds/journey_bg.svg')",
            },
        },
    },
    plugins: [],
};

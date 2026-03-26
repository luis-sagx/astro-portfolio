/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{astro,html,ts}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
                display: ['Outfit', '"Plus Jakarta Sans"', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'monospace'],
            },
        },
    },
    plugins: [],
    future: {
        hoverOnlyWhenSupported: true,
    },
}
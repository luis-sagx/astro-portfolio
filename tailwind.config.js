/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{astro,html,ts}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
                display: ['Inter', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'monospace'],
                serif: ['"Instrument Serif"', 'serif'],
            },
        },
    },
    plugins: [],
    future: {
        hoverOnlyWhenSupported: true,
    },
}
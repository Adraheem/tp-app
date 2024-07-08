/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#ff9900",
                    '50': '#fffbea',
                    '100': '#fff2c5',
                    '200': '#ffe685',
                    '300': '#ffd246',
                    '400': '#ffbd1b',
                    '500': '#ff9900',
                    '600': '#e27200',
                    '700': '#bb4d02',
                    '800': '#983b08',
                    '900': '#7c310b',
                    '950': '#481700',
                },

            },
            fontFamily: {
                sans: ["Ember", "sans-serif"],
            },
            animation: {
                enter: 'enter 200ms ease-out',
            },
            keyframes: {
                enter: {
                    '0%': {transform: 'scale(0.9)', opacity: 0},
                    '100%': {transform: 'scale(1)', opacity: 1},
                },
            },
        },
    },
    plugins: [],
    important: true,
}


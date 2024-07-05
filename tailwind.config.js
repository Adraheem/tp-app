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
                sans: ["Ember", "sans-serif"]
            }
        },
    },
    plugins: [],
}


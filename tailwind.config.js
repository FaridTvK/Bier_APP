/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary-yellow': '#f9d342',
                'secondary-orange': '#ff8c42',
                'light-orange': '#ffbd59',
                'off-white': '#fff8e6',
                'dark-text': '#333333',
            },
        },
    },
    plugins: [],
}

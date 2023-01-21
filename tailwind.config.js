/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{jsx,js}'],
    theme: {
        extend: {
            colors: {
                brand: '#f96162',
            },
            backgroundImage: {
                banner: `url('../public/images/banner.jpg')`,
            },
        },
    },
    plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
    corePlugins: {
        preflight: false,
    },
    content: ['./app/**/*.{js,ts,jsx,tsx,css}'],
    important: '#__next',
    theme: {
        extend: {},
    },
    plugins: [],
};

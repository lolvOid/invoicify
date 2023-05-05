// tailwind.config.js
module.exports = {
	content: ['./src/*.{js,jsx}', './src/**/*.{js,jsx}'],
	purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}

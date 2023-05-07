// tailwind.config.js
module.exports = {
	content: ['./src/*.{js,jsx}', './src/**/*.{js,jsx}', "./node_modules/flowbite/dist/*.js"],
	purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	darkMode: 'media', // or 'media' or 'class'
	theme:{
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [
        require('flowbite/plugin'),
	
    ]

}

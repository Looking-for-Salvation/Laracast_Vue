const colors = require("tailwindcss/colors");

module.exports = {
	purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				rose: colors.rose,
				orange: colors.orange,
				emerald: colors.emerald,
				blueGray: colors.blueGray,
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};

const colors = require("tailwindcss/colors");

module.exports = {
	purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			padding: {},
			fontSize: {
				"2xs": ".6666rem",
			},
			colors: {
				rose: colors.rose,
				orange: colors.orange,
				emerald: colors.emerald,
				blueGray: colors.blueGray,
			},
			fontFamily: {
				Ubuntu: ["Ubuntu", "sans-serif"],
				OpenSans: ['"Open Sans"', "sans-serif"],
				Roboto: ["Roboto", "sans-serif"],
				IranSans: ["IRANSans", "sans-serif"],
				IranSansFD: ["IRANSans(FaNum)", "sans-serif"],
				IranYekan: ["IRANYekanWeb(FaNum)", "sans-serif"],
				YekanBakh: ['"Yekan Bakh"', "sans-serif"],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};

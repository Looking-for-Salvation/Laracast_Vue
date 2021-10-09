module.exports = {
	purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			maxWidth: {
				"[600px]": "600px",
			},
			backgroundOpacity: {
				"97": "0.97",
			},
			fontSize: {
				"2xs": ".6666rem",
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

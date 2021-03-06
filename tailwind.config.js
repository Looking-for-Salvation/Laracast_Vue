module.exports = {
	purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	corePlugins: {
		container: false,
	},
	theme: {
		screens: {
			md: "768px",
			lg: "992px",
			xl: "1200px",
			widescreen: "1500px",
			sm: { max: "992px" },
			mobile: { max: "768px" },
		},
		extend: {
			screens: {
				ccs: "1300px",
			},
			colors: {
				"[#73a3e4]": "#73a3e4",
			},
			width: {
				"42": "11rem",
				"[150px]": "150px",
			},
			height: {
				"[39px]": "39px",
				"[122px]": "122px",
			},
			maxWidth: {
				"[350px]": "350px",
				"[415px]": "415px",
				"[496px]": "496px",
				"[500px]": "500px",
				"[600px]": "600px",
				"[650px]": "650px",
				"[725px]": "725px",
				"2xs": "12rem",
				sm: "30rem",
				md: "40rem",
				lg: "50rem",
				xl: "60rem",
				"2/3": "75%",
			},
			minWidth: {
				"[200px]": "200px",
			},
			maxHeight: {
				none: "none",
				"[790px]": "790px",
				"90vh": "90vh",
			},
			minHeight: {
				"[100px]": "100px",
				"[650px]": "650px",
				"[calc(100vh-60px]": "calc(100vh - 60px)",
			},
			padding: {
				"[2px]": "2px",
				"[20px]": "20px",
				"[25px]": "25px",
				"[35px]": "35px",
			},
			margin: {
				"[-20px]": "-20px",
				"[20px]": "20px",
				"[35px]": "35px",
				"[93px]": "93px",
			},
			inset: {
				"[-146px]": "-146px",
				"[-76px]": "-76px",
				"[8px]": "8px",
			},
			borderRadius: {
				xl: "0.9rem",
				"2xl": "1.25rem",
				"[42px]": "42px",
			},
			opacity: {
				"3": "0.03",
				"97": "0.97",
			},
			fontSize: {
				"3xs": "0.6rem",
				"2xs": ".6666rem",
				xs: "0.834rem",
				sm: "0.9rem",
				lg: "1.0666rem",
				"2lg": "1.134rem",
				"3lg": "1.2rem",
				xl: "1.33333rem",
				"2xl": "1.7rem",
				"3xl": "2.2rem",
				"4xl": "2.4rem",
				"5xl": "2.6666rem",
				"6xl": "3.333rem",
				"[12px]": "12px",
				"[14px]": "14px",
				"[30px]": "30px",
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
	plugins: [
		function({ addComponents }) {
			addComponents({
				".container": {
					width: "100%",
					"@screen md": {
						margin: "0 auto",
						maxWidth: "100%",
					},
					"@screen xl": {
						maxWidth: "1130px",
					},
					"@screen ccs": {
						maxWidth: "1200px",
					},
				},
			});
		},
	],
};

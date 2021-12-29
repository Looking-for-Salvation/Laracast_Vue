export default {
	namespaced: true,
	state() {
		return {
			skills: [
				{
					type: "frameworks",
					seriesCount: 55,
					lessonsCount: 951,
					img: frameworksImage,
					url: { name: "Browse Frameworks" },
				},
				{
					type: "languages",
					seriesCount: 17,
					lessonsCount: 149,
					img: languagesImages,
					url: { name: "Browse Languages" },
				},
				{
					type: "techniques",
					seriesCount: 33,
					lessonsCount: 370,
					img: techniquesImage,
					url: { name: "Browse Techniques" },
				},
				{
					type: "testing",
					seriesCount: 12,
					lessonsCount: 100,
					img: testingImages,
					url: { name: "Browse Testing" },
				},
				{
					type: "tooling",
					seriesCount: 30,
					lessonsCount: 345,
					img: toolingImages,
					url: { name: "Browse Tooling" },
				},
			],
		};
	},
	getters: {
		skills(state) {
			return state.skills;
		},
	},
};

import frameworksImage from "@/assets/images/home/frameworks-default.svg";
import languagesImages from "@/assets/images/home/languages-default.svg";
import techniquesImage from "@/assets/images/home/techniques-default.svg";
import testingImages from "@/assets/images/home/testing-default.svg";
import toolingImages from "@/assets/images/home/tooling-default.svg";

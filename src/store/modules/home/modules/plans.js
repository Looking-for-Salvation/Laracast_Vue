export default {
	namespaced: true,
	state() {
		return {
			personalPlans: [
				{
					periodicity: "monthly",
					price: "50,000",
					img: monthlyImage,
					description: "هرچیزی که میخوای یاد بگیر. دسترسی به محتوای بی پایان از برنامه نویسی با طرح ماهانه ما",
					url: "/signup?plan=monthly-15",
					primary: false,
				},
				{
					periodicity: "yearly",
					price: "500,000",
					img: yearlyImage,
					description: "هرچیزی که میخوای یاد بگیر. دسترسی به محتوای بی پایان از برنامه نویسی با طرح سالانه ما",
					url: "/signup?plan=yearly-99",
					primary: true,
				},
				{
					periodicity: "lifetime",
					price: "5,000,000",
					img: lifetimeImage,
					description: "هرچیزی که میخوای یاد بگیر. دسترسی به محتوای بی پایان از برنامه نویسی با طرح مادام العمر ما",
					url: "/signup?plan=forever",
					primary: false,
				},
			],
			teamPlans: [
				{
					planId: "tp002",
					name: "Binary System",
					price: "750,000",
					developerToLink: 2,
					url: "/signup?plan=business-2",
					img: binarySystem,
				},
				{
					planId: "tp005",
					name: "Complex Circuit",
					price: "950,000",
					developerToLink: 5,
					url: "/signup?plan=business-5",
					img: complexCircuit,
				},
				{
					planId: "tp010",
					name: "Factory Default",
					price: "1,250,000",
					developerToLink: 10,
					url: "/signup?plan=business-10",
					img: factoryDefault,
				},
				{
					planId: "tp025",
					name: "Open Mainframe",
					price: "1,750,000",
					developerToLink: 25,
					url: "/signup?plan=business-25",
					img: openMainframe,
				},
				{
					planId: "tp050",
					name: "Cybernetic Entity",
					price: "2,500,000",
					developerToLink: 50,
					url: "/signup?plan=business-50",
					img: cyberneticEntity,
				},
			],
			selectedTeamPlan: "tp005",
		};
	},
	mutations: {
		setSelectedTeamPlan(state, payload) {
			state.selectedTeamPlan = payload.planId;
		},
	},
	getters: {
		personalPlans(state) {
			return state.personalPlans;
		},
		monthlyPlan(state) {
			return state.personalPlans.find((item) => item.periodicity === "monthly");
		},
		selectedTeamPlan(state) {
			return state.teamPlans.find((item) => item.planId === state.selectedTeamPlan);
		},
	},
	actions: {
		setSelectedTeamPlan({ commit }, payload) {
			commit("setSelectedTeamPlan", payload);
		},
	},
};

import monthlyImage from "@/assets/images/home/home-plans/sub-monthly.svg";
import yearlyImage from "@/assets/images/home/home-plans/sub-yearly.svg";
import lifetimeImage from "@/assets/images/home/home-plans/sub-lifetime.svg";

import binarySystem from "@/assets/images/home/home-plans/team-2-developers-icon.svg";
import complexCircuit from "@/assets/images/home/home-plans/team-5-developers-icon.svg";
import factoryDefault from "@/assets/images/home/home-plans/team-10-developers-icon.svg";
import openMainframe from "@/assets/images/home/home-plans/team-25-developers-icon.svg";
import cyberneticEntity from "@/assets/images/home/home-plans/team-50-developers-icon.svg";

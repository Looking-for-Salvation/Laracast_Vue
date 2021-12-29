export default {
	namespaced: true,
	state() {
		return {
			plans: [
				{
					planId: "p001",
					category: "personal",
					periodicity: "monthly",
					description: "هرچیزی که میخوای یاد بگیر. دسترسی به محتوای بی پایان از برنامه نویسی با طرح ماهانه ما",
					name: "Monthly",
					price: "50,000",
					developerToLink: 1,
					url: { name: "Sign Up", query: { plan: "monthly-50" } },
					img: monthlyImage,
					primary: false,
					selected: false,
				},
				{
					planId: "p002",
					category: "personal",
					periodicity: "yearly",
					description: "هرچیزی که میخوای یاد بگیر. دسترسی به محتوای بی پایان از برنامه نویسی با طرح سالانه ما",
					name: "Yearly",
					price: "500,000",
					developerToLink: 1,
					url: { name: "Sign Up", query: { plan: "yearly-500" } },
					img: yearlyImage,
					primary: true,
					selected: false,
				},
				{
					planId: "p003",
					category: "personal",
					periodicity: "lifetime",
					description: "هرچیزی که میخوای یاد بگیر. دسترسی به محتوای بی پایان از برنامه نویسی با طرح مادام العمر ما",
					name: "Lifetime",
					price: "5,000,000",
					developerToLink: 1,
					url: { name: "Sign Up", query: { plan: "forever" } },
					img: lifetimeImage,
					primary: false,
					selected: false,
				},
				{
					planId: "tp001",
					category: "team",
					periodicity: "yearly",
					description: "",
					name: "Binary System",
					price: "750,000",
					developerToLink: 2,
					url: { name: "Sign Up", query: { plan: "business-2" } },
					img: binarySystem,
					primary: false,
					selected: false,
				},
				{
					planId: "tp002",
					category: "team",
					periodicity: "yearly",
					description: "",
					name: "Complex Circuit",
					price: "950,000",
					developerToLink: 5,
					url: { name: "Sign Up", query: { plan: "business-5" } },
					img: complexCircuit,
					primary: false,
					selected: false,
				},
				{
					planId: "tp003",
					category: "team",
					periodicity: "yearly",
					description: "",
					name: "Factory Default",
					price: "1,250,000",
					developerToLink: 10,
					url: { name: "Sign Up", query: { plan: "business-10" } },
					img: factoryDefault,
					primary: false,
					selected: false,
				},
				{
					planId: "tp004",
					category: "team",
					periodicity: "yearly",
					description: "",
					name: "Open Mainframe",
					price: "1,750,000",
					developerToLink: 25,
					url: { name: "Sign Up", query: { plan: "business-25" } },
					img: openMainframe,
					primary: false,
					selected: false,
				},
				{
					planId: "tp005",
					category: "team",
					periodicity: "yearly",
					description: "",
					name: "Cybernetic Entity",
					price: "2,500,000",
					developerToLink: 50,
					url: { name: "Sign Up", query: { plan: "business-50" } },
					img: cyberneticEntity,
					primary: false,
					selected: false,
				},
			],
			selectedTeamPlan: "tp002",
			questions: [
				{
					title: "آیا میتوان طرح را کنسل کرد؟",
					question:
						"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است <strong>لورم ایپسوم متن</strong>. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است <strong>لورم ایپسوم متن ساختگی</strong>, لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ <strong>لورم ایپسوم متن</strong>. </p>",
					img: brokenHeart,
				},
				{
					title: "آیا میتوان طرح را کنسل کرد؟",
					question:
						"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است <strong>لورم ایپسوم متن</strong>. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است <strong>لورم ایپسوم متن ساختگی</strong>, لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ <strong>لورم ایپسوم متن</strong>. </p>",
					img: graduationHat,
				},
				{
					title: "آیا میتوان طرح را کنسل کرد؟",
					question:
						"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است <strong>لورم ایپسوم متن</strong>. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است <strong>لورم ایپسوم متن ساختگی</strong>, لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ <strong>لورم ایپسوم متن</strong>. </p>",
					img: mind,
				},
				{
					title: "آیا میتوان طرح را کنسل کرد؟",
					question:
						"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است <strong>لورم ایپسوم متن</strong>. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است <strong>لورم ایپسوم متن ساختگی</strong>, لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ <strong>لورم ایپسوم متن</strong>. </p>",
					img: watch,
				},
			],
		};
	},
	mutations: {
		setSelectedTeamPlan(state, payload) {
			state.selectedTeamPlan = payload.planId;
		},
		setSelectedPlan(state, payload) {
			state.plans.find((item) => {
				if (item.planId === payload.planId) item.selected = true;
				else if (item.planId !== payload.planId) item.selected = false;
			});
		},
	},
	getters: {
		personalPlans(state) {
			return state.plans.filter((item) => item.category === "personal");
		},
		monthlyPlan(state) {
			return state.plans.find((item) => item.periodicity === "monthly");
		},
		yearlyPlan(state) {
			return state.plans.find((item) => item.periodicity === "yearly");
		},
		lifetimePlan(state) {
			return state.plans.find((item) => item.periodicity === "lifetime");
		},

		teamPlans(state) {
			return state.plans.filter((item) => item.category === "team");
		},
		selectedTeamPlan(state) {
			return state.plans.find((item) => item.planId === state.selectedTeamPlan);
		},

		questions(state) {
			return state.questions;
		},
	},
	actions: {
		setSelectedTeamPlan({ commit }, payload) {
			commit("setSelectedTeamPlan", payload);
		},
		setSelectedPlan({ commit }, payload) {
			commit("setSelectedPlan", payload);
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

import brokenHeart from "@/assets/images/signup/broken-heart-icon.svg";
import graduationHat from "@/assets/images/signup/graduation-hat-icon.svg";
import mind from "@/assets/images/signup/mind-icon.svg";
import watch from "@/assets/images/signup/watch-icon.svg";

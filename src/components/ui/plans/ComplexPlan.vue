<template>
	<div class="mx-auto lg:mx-0 team-plan-wrap">
		<div class="relative w-auto h-full px-4 py-5 text-center bg-white md:flex mobile:mx-auto plan card rounded-xl md:max-w-none">
			<div class="flex flex-col justify-around w-full h-full team-plan-left" style="flex: 2 1 0%;">
				<div class="flex items-start mb-4">
					<h5 class="ml-auto text-base text-black font-IranSans md:text-xs">
						<router-link :to="selectedTeamPlan.url">{{ planNamePersian }}</router-link>
					</h5>
					<div class="relative leading-none text-3lg plan-price font-IranSans">
						<div>
							<div class="relative flex items-baseline text-blue-400 font-IranSans">
								<span>{{ selectedTeamPlan.price }}</span>
								<span>&#160;تومان</span>
							</div>
							<span class="text-sm text-black text-opacity-50 font-IranSans">/سالانه</span>
						</div>
					</div>
				</div>
				<router-link :to="selectedTeamPlan.url" class="flex justify-center">
					<img :src="selectedTeamPlan.img" :alt="selectedTeamPlan.name" style="width: 165px; height: 120px;" />
				</router-link>
				<p class="px-2 mb-8 text-black md:my-4 font-IranSans">
					اکانت خود را لینک کنید تا
					<strong>{{ selectedTeamPlan.developerToLink + " برنامه نویس" }}</strong>
					با طرح سالانه آمورش دهید
				</p>
				<router-link
					:to="selectedTeamPlan.url"
					class="hidden max-w-full px-8 py-3 text-sm transition-all duration-150 md:w-5/6 md:mx-auto md:block font-IranSans rounded-2xl complex-plan-button"
					style="letter-spacing: 0.23px;"
					>{{ "آموزش " + selectedTeamPlan.developerToLink + " برنامه نویس" }}
				</router-link>
			</div>
			<div class="flex-1 h-full md:pr-6">
				<div class="flex flex-col h-full md:flex-row thermometer-wrap">
					<div class="thermometer">
						<div
							class="bg-blue-400 thermometer-inner"
							:class="{
								'is-filled-20': fillRate === '20percent',
								'is-filled-40': fillRate === '40percent',
								'is-filled-60': fillRate === '60percent',
								'is-filled-80': fillRate === '80percent',
								'is-filled-100': fillRate === '100percent',
							}"
						></div>
					</div>
					<div class="relative flex w-full md:flex-col-reverse md:justify-around md:mr-3 thermometer-legend" style="max-width: 99%;">
						<div class="is-filled-20">
							<router-link
								:to="{ name: 'Sign Up', query: { plan: 'business-2' } }"
								class="relative z-10 inline-block w-full px-2 py-2 bg-gray-100 border border-transparent border-solid text-2xs md:text-xs md:px-0 md:py-2 md:w-32 font-IranSans rounded-2xl"
								:class="{ 'is-active': fillRate === '20percent' }"
								@mouseenter="setTwoDev"
								>2 نفر</router-link
							>
						</div>
						<div class="is-filled-40">
							<router-link
								:to="{ name: 'Sign Up', query: { plan: 'business-5' } }"
								class="relative z-10 inline-block w-full px-2 py-2 bg-gray-100 border border-transparent border-solid text-2xs md:text-xs md:px-0 md:py-2 md:w-32 font-IranSans rounded-2xl"
								:class="{ 'is-active': fillRate === '40percent' }"
								@mouseenter="setFiveDev"
								>5 نفر</router-link
							>
						</div>
						<div class="is-filled-60">
							<router-link
								:to="{ name: 'Sign Up', query: { plan: 'business-10' } }"
								class="relative z-10 inline-block w-full px-2 py-2 bg-gray-100 border border-transparent border-solid text-2xs md:text-xs md:px-0 md:py-2 md:w-32 font-IranSans rounded-2xl"
								:class="{ 'is-active': fillRate === '60percent' }"
								@mouseenter="setTenDev"
								>10 نفر</router-link
							>
						</div>
						<div class="is-filled-80">
							<router-link
								:to="{ name: 'Sign Up', query: { plan: 'business-25' } }"
								class="relative z-10 inline-block w-full px-2 py-2 bg-gray-100 border border-transparent border-solid text-2xs md:text-xs md:px-0 md:py-2 md:w-32 font-IranSans rounded-2xl"
								:class="{ 'is-active': fillRate === '80percent' }"
								@mouseenter="setTwentyDev"
								>25 نفر</router-link
							>
						</div>
						<div class="is-filled-100">
							<router-link
								:to="{ name: 'Sign Up', query: { plan: 'business-50' } }"
								class="relative z-10 inline-block w-full px-2 py-2 bg-gray-100 border border-transparent border-solid text-2xs md:text-xs md:px-0 md:py-2 md:w-32 font-IranSans rounded-2xl"
								:class="{ 'is-active': fillRate === '100percent' }"
								@mouseenter="setFiftyDev"
								>50 نفر</router-link
							>
						</div>
					</div>
				</div>
				<router-link
					:to="selectedTeamPlan.url"
					class="block max-w-full px-8 py-3 mx-auto text-sm transition-all md:hidden font-IranSans rounded-2xl complex-plan-button"
					style="letter-spacing: 0.23px;"
					>{{ "آموزش " + selectedTeamPlan.developerToLink + " برنامه نویس" }}
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
	setup() {
		const store = useStore();
		const selectedTeamPlan = computed(() => store.getters["home/plans/selectedTeamPlan"]);
		const planNamePersian = computed(() => {
			let planName = "";
			if (selectedTeamPlan.value.planId === "tp001") planName = "سیستم جفتی";
			if (selectedTeamPlan.value.planId === "tp002") planName = "مدار پیچپیده";
			if (selectedTeamPlan.value.planId === "tp003") planName = "پیش فرض کارخانه";
			if (selectedTeamPlan.value.planId === "tp004") planName = "جریان باز";
			if (selectedTeamPlan.value.planId === "tp005") planName = "مؤسسه سایبرنتیک";
			return planName;
		});
		const fillRate = computed(() => {
			let fillRate = "";
			if (selectedTeamPlan.value.planId === "tp001") fillRate = "20percent";
			if (selectedTeamPlan.value.planId === "tp002") fillRate = "40percent";
			if (selectedTeamPlan.value.planId === "tp003") fillRate = "60percent";
			if (selectedTeamPlan.value.planId === "tp004") fillRate = "80percent";
			if (selectedTeamPlan.value.planId === "tp005") fillRate = "100percent";
			return fillRate;
		});

		const setTwoDev = () => store.dispatch("home/plans/setSelectedTeamPlan", { planId: "tp001" });
		const setFiveDev = () => store.dispatch("home/plans/setSelectedTeamPlan", { planId: "tp002" });
		const setTenDev = () => store.dispatch("home/plans/setSelectedTeamPlan", { planId: "tp003" });
		const setTwentyDev = () => store.dispatch("home/plans/setSelectedTeamPlan", { planId: "tp004" });
		const setFiftyDev = () => store.dispatch("home/plans/setSelectedTeamPlan", { planId: "tp005" });

		return {
			selectedTeamPlan,
			planNamePersian,
			fillRate,
			setTwoDev,
			setFiveDev,
			setTenDev,
			setTwentyDev,
			setFiftyDev,
		};
	},
};
</script>

<style scoped>
.team-plan-wrap {
	flex: 1;
}

.is-active {
	--bg-opacity: 1;
	color: rgba(96, 165, 250, var(--bg-opacity));
	border-color: currentColor;
}

.complex-plan-button {
	--border-opacity: 1;
	--bg-opacity: 1;
	--text-opacity: 1;
	background-color: rgba(50, 138, 241, var(--bg-opacity));
	border-color: rgba(50, 138, 241, var(--border-opacity));
	color: rgba(255, 255, 255, var(--text-opacity));
}

.complex-plan-button:hover {
	--border-opacity: 1;
	--bg-opacity: 1;
	--text-opacity: 1;
	background-color: rgba(39, 121, 189, var(--bg-opacity));
	border-color: rgba(50, 138, 241, var(--border-opacity));
	box-shadow: 0 0 10px rgb(0 0 0 / 25%);
	color: rgba(255, 255, 255, var(--text-opacity));
}

.thermometer-wrap {
	/* height: 50px; */
	margin-bottom: 2rem;
}

.thermometer {
	--bg-opacity: 1;
	background-color: rgba(237, 237, 237, var(--bg-opacity));
	border-radius: 9999px;
	display: flex;
	flex-direction: column-reverse;
	position: relative;
	height: 10px;
	margin-bottom: 2rem;
	width: 100%;
}

.thermometer::after {
	--bg-opacity: 1;
	background-color: rgba(50, 138, 241, var(--bg-opacity));
	border-radius: 9999px;
	box-shadow: 0 0 0 7px #c7e7f7;
	content: "";
	display: block;
	height: 15px;
	position: absolute;
	width: 15px;
	top: -2px;
}

.thermometer-inner {
	border-radius: 9999px;
	z-index: 10;
	--bg-opacity: 1;
	background-color: rgba(50, 138, 241, var(--tw-bg-opacity));
	height: 100%;
}

.thermometer-inner.is-filled-20 {
	width: 20%;
}
.thermometer-inner.is-filled-40 {
	width: 40%;
}
.thermometer-inner.is-filled-60 {
	width: 60%;
}
.thermometer-inner.is-filled-80 {
	width: 80%;
}
.thermometer-inner.is-filled-100 {
	width: 100%;
}

.thermometer-legend > div {
	width: 20%;
}

@media (min-width: 768px) {
	.team-plan-wrap {
		flex: 2;
		height: 358px;
		max-width: 581px;
	}

	.thermometer-wrap {
		height: 100%;
		margin-bottom: 0;
	}

	.thermometer {
		height: 100%;
		margin-bottom: 0;
		width: 10px;
	}

	.thermometer:after {
		bottom: 0;
		left: -3px;
		top: auto;
	}

	.thermometer-inner.is-filled-20 {
		height: 20%;
		width: auto;
	}
	.thermometer-inner.is-filled-40 {
		height: 40%;
		width: auto;
	}
	.thermometer-inner.is-filled-60 {
		height: 60%;
		width: auto;
	}
	.thermometer-inner.is-filled-80 {
		height: 80%;
		width: auto;
	}
	.thermometer-inner.is-filled-100 {
		height: 100%;
		width: auto;
	}

	.thermometer-legend > div {
		width: 100%;
	}
}
</style>

<template>
	<div
		@click="setSelectedPlan"
		class="signup-plan w-full lg:max-w-[725px] h-[39px] relative bg-white rounded-xl flex justify-between items-center px-4 md:px-6"
		:class="{ 'is-selected': plan.selected }"
	>
		<div class="md:w-32">
			<h2 class="text-[12px] text-black tracking-normal font-IranSans">
				{{ planNamePersian }}
				<span class="md:hidden text-2xs">{{ plan.developerToLink }}</span>
			</h2>
		</div>
		<p class="flex-1 hidden mx-auto text-sm text-center text-black md:block font-IranSans md:max-w-xs">
			{{ `${plan.developerToLink} برنامه نویس` }}
		</p>
		<div class="flex mr-auto md:ml-6">
			<h3 class="sr-only"></h3>
			<div class="inline-flex items-center tracking-normal text-blue-400 font-IranSans md:text-base">{{ `${plan.price} تومان` }}</div>
		</div>
		<div class="hidden check-wrap md:block" :class="{ 'is-active': plan.selected }"></div>
	</div>
</template>

<script>
import { computed } from "vue";

export default {
	props: {
		plan: {
			type: Object,
			required: true,
		},
	},
	emits: ["setSelectedPlan"],
	setup(props, { emit }) {
		const planNamePersian = computed(() => {
			let planName = "";
			if (props.plan.planId === "tp001") planName = "سیستم جفتی";
			if (props.plan.planId === "tp002") planName = "مدار پیچیده";
			if (props.plan.planId === "tp003") planName = "پیش فرض کارخانه";
			if (props.plan.planId === "tp004") planName = "جریان باز";
			if (props.plan.planId === "tp005") planName = "مؤسسه سایبرنتیک";
			return planName;
		});

		const setSelectedPlan = () => emit("setSelectedPlan", { planId: props.plan.planId });

		return {
			planNamePersian,
			setSelectedPlan,
		};
	},
};
</script>

<style scoped>
.signup-plan {
	border: 1px solid rgba(36, 37, 38, 0.08);
	cursor: pointer;
	/* height: 65px;
	width: 100%; */
}

.signup-plan.is-selected,
.signup-plan:hover {
	--border-opacity: 1;
	border: 1px solid;
	border-color: rgba(50, 138, 241, var(--border-opacity));
}

.check-wrap {
	--border-opacity: 1;
	--bg-opacity: 1;
	background-color: rgba(246, 246, 246, var(--bg-opacity));
	border-color: rgba(204, 204, 204, var(--border-opacity));
	border-radius: 50%;
	border-width: 1px;
	height: 20px;
	width: 20px;
}

.check-wrap.is-active {
	--bg-opacity: 1;
	-webkit-animation: wrap 0.3s ease-in-out forwards;
	animation: wrap 0.3s ease-in-out forwards;
	background-color: rgba(50, 138, 241, var(--bg-opacity));
	border-style: none;
	transform: scale(0);
}

.check-wrap.is-active:before {
	-webkit-animation-delay: 0.2s;
	animation-delay: 0.2s;
	-webkit-animation-name: left;
	animation-name: left;
	border-bottom-left-radius: 7px;
	border-top-left-radius: 7px;
	left: 5px;
	top: 9px;
	transform: rotate(45deg);
}

.check-wrap.is-active:after {
	-webkit-animation-delay: 0.3s;
	animation-delay: 0.3s;
	-webkit-animation-name: right;
	animation-name: right;
	border-bottom-right-radius: 7px;
	border-top-right-radius: 7px;
	left: 8px;
	top: 13px;
	transform: rotate(-45deg);
}

.check-wrap.is-active:after,
.check-wrap.is-active:before {
	-webkit-animation-duration: 0.3s;
	animation-duration: 0.3s;
	-webkit-animation-fill-mode: forwards;
	animation-fill-mode: forwards;
	-webkit-animation-timing-function: ease-in-out;
	animation-timing-function: ease-in-out;
	background-color: #fff;
	content: "";
	height: 2px;
	position: absolute;
	transform-origin: left;
	width: 0;
}

@media (min-width: 992px) {
	/* .signup-plan {
		flex: 1;
		height: 100px;
		width: auto;
	} */
}

@media (min-width: 1200px) {
	.signup-plan {
		flex: none;
		/* width: 152px; */
	}
}
</style>

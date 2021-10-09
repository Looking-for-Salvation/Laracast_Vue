<template>
	<div class="flex justify-center pb-6 plans">
		<simple-plan
			:periodicity="monthlyData.periodicity"
			:price="monthlyData.price"
			:img="monthlyData.img"
			:description="monthlyData.description"
			:route="monthlyData.route"
		></simple-plan>
		<complex-plan></complex-plan>
	</div>
</template>

<script>
import SimplePlan from "./SimplePlan.vue";
import ComplexPlan from "./ComplexPlan.vue";

import planData from "./data.js";

export default {
	components: {
		SimplePlan,
		ComplexPlan,
	},
	setup() {
		const monthlyData = planData[0];

		return {
			monthlyData,
		};
	},
};
</script>

<style scoped>
.plan-start-learning-button {
	margin-left: auto;
	margin-right: auto;
	max-width: 85%;
}

.plan-wrap {
	height: 358px;
	max-width: 290px;
}

.plan-primary {
	background: linear-gradient(180deg, #21c8f6, #637bff);
	border: none !important;
	padding: 1px !important;
}

.plan-primary > div:first-child {
	background: #fff;
	border-radius: inherit;
	padding: 1.25rem 1rem 1.5rem;
}

.plan-primary-button {
	--border-opacity: 1;
	--bg-opacity: 1;
	--text-opacity: 1;
	background-color: rgba(50, 138, 241, var(--bg-opacity));
	border-color: rgba(50, 138, 241, var(--border-opacity));
	color: rgba(255, 255, 255, var(--text-opacity));
}

.plan-primary-button:hover {
	--border-opacity: 1;
	--bg-opacity: 1;
	--text-opacity: 1;
	background-color: rgba(39, 121, 189, var(--bg-opacity));
	border-color: rgba(50, 138, 241, var(--border-opacity));
	box-shadow: 0 0 10px rgb(0 0 0 / 25%);
	color: rgba(255, 255, 255, var(--text-opacity));
}
</style>

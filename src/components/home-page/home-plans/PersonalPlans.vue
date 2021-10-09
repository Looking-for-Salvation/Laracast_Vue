<template>
	<div class="justify-center plans lg:flex lg:pb-6">
		<simple-plan
			v-for="plan in plans"
			:key="plan.periodicity"
			:periodicity="plan.periodicity"
			:price="plan.price"
			:img="plan.img"
			:route="plan.route"
			:description="plan.description"
			:primary="plan.primary"
		></simple-plan>
	</div>
</template>

<script>
import SimplePlan from "./SimplePlan.vue";

import planData from "./data.js";

export default {
	components: {
		SimplePlan,
	},
	setup() {
		const plans = planData;

		return {
			plans,
		};
	},
};
</script>

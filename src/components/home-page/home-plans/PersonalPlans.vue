<template>
	<div class="justify-center plans lg:flex lg:pb-6">
		<simple-plan v-for="plan in personalPlans" :key="plan.periodicity" :plan="plan"></simple-plan>
	</div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

import SimplePlan from "./SimplePlan.vue";
export default {
	components: {
		SimplePlan,
	},
	setup() {
		const store = useStore();
		const personalPlans = computed(() => store.getters["home/plans/personalPlans"]);

		return {
			personalPlans,
		};
	},
};
</script>

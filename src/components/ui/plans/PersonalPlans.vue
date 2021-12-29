<template>
	<div class="justify-center plans lg:flex lg:pb-6">
		<basic-plan v-for="plan in personalPlans" :key="plan.periodicity" :plan="plan"></basic-plan>
	</div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

import BasicPlan from "./BasicPlan.vue";
export default {
	components: {
		BasicPlan,
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

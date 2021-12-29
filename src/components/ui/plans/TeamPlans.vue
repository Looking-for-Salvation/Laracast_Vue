<template>
	<div class="justify-center lg:flex lg:pb-6 plans">
		<basic-plan :plan="monthlyPlan"></basic-plan>
		<complex-plan></complex-plan>
	</div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

import BasicPlan from "./BasicPlan.vue";
import ComplexPlan from "./ComplexPlan.vue";

export default {
	components: {
		BasicPlan,
		ComplexPlan,
	},
	setup() {
		const store = useStore();
		const monthlyPlan = computed(() => store.getters["home/plans/monthlyPlan"]);

		return {
			monthlyPlan,
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

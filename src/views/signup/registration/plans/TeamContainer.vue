<template>
	<div>
		<div>
			<div>
				<fieldset class="mt-6 lg:max-w-[725px]">
					<legend class="flex justify-between w-full px-0 mb-4 text-xs font-IranSans">
						طرح های تیمی
						<span class="ml-2 mr-auto text-black opacity-50 font-IranSans text-2xs">(پرداخت سالیانه)</span>
					</legend>
					<div class="space-y-2">
						<team-plan v-for="plan in plans" :key="plan.planId" :plan="plan" @setSelectedPlan="setSelectedPlan"></team-plan>
					</div>
				</fieldset>
			</div>
		</div>
	</div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import TeamPlan from "@/views/signup/registration/plans/TeamPlan.vue";

export default {
	components: {
		TeamPlan,
	},
	setup() {
		const store = useStore();
		const plans = computed(() => store.getters["home/plans/teamPlans"]);
		const setSelectedPlan = (id) => store.dispatch("home/plans/setSelectedPlan", id);

		return {
			plans,
			setSelectedPlan,
		};
	},
};
</script>

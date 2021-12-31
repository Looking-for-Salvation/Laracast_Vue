<template>
	<div>
		<div>
			<div>
				<fieldset>
					<legend class="px-0 mb-4 text-xs font-IranSans">طرح های شخصی</legend>
					<div class="flex flex-wrap md:flex-nowrap gap-x-4 gap-y-3">
						<personal-plan v-for="plan in plans" :key="plan.planId" :plan="plan" @setSelectedPlan="setSelectedPlan"></personal-plan>
					</div>
				</fieldset>
			</div>
		</div>
	</div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import PersonalPlan from "@/views/signup/registration/plans/PersonalPlan.vue";

export default {
	components: {
		PersonalPlan,
	},
	setup() {
		const store = useStore();
		const plans = computed(() => store.getters["home/plans/personalPlans"]);

		const setSelectedPlan = (id) => {
			store.dispatch("home/plans/setSelectedPlan", id);
		};

		return {
			plans,
			setSelectedPlan,
		};
	},
};
</script>

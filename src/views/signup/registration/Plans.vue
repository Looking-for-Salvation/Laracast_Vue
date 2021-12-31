<template>
	<form autocomplete="off">
		<div>
			<div class="w-full">
				<div class="control">
					<div>
						<input type="hidden" name="plan" value="" />
						<personal-plans></personal-plans>
						<team-plans></team-plans>
					</div>
				</div>
				<div class="mt-6 control md:max-w-xs">
					<div class="control">
						<label class="block text-gray-400 text-2xs font-IranSans" for="couponCode">کد تخفیف</label>
						<div class="relative flex items-center border-b border-gray-200 border-solid">
							<input
								type="text"
								id="couponCode"
								class="text-sm input is-minimal font-IranSans"
								style="border: none;"
								autocomplete="off"
								placeholder="کد تخفیف دارید؟"
							/>
							<div class="absolute left-0 flex items-center justify-center w-4 h-4 p-1 mx-auto -mt-px bg-gray-300 rounded-full">
								<div
									class="tw-w-4 tw-h-4 tw-rounded-full tw-p-1 tw-mx-auto tw-flex tw-justify-center tw-items-center tw-absolute tw-right-0 tw--mt-px tw-bg-grey"
								>
									<svg width="10" height="8" viewBox="0 0 10 8">
										<path
											fill="#FFF"
											fill-rule="evenodd"
											stroke="#FFF"
											stroke-width=".728"
											d="M3.533 5.646l-2.199-2.19c-.195-.194-.488-.194-.684 0-.195.195-.195.487 0 .682l2.883 2.87L9.055 1.51c.195-.194.195-.487 0-.681-.196-.195-.49-.195-.685 0L3.533 5.646z"
										></path>
									</svg>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="flex justify-center mt-10 md:justify-start">
				<button @click="setCurrentTab" type="button" class="button blue-button text-[14px] w-full md:w-auto font-IranSans">ادامه برای پرداخت</button>
			</div>
		</div>
		<div></div>
	</form>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import PersonalPlans from "@/views/signup/registration/plans/PersonalContainer.vue";
import TeamPlans from "@/views/signup/registration/plans/TeamContainer.vue";

export default {
	components: {
		PersonalPlans,
		TeamPlans,
	},
	emits: ["setCurrentTab"],
	setup(_, { emit }) {
		const setCurrentTab = () => emit("setCurrentTab");

		const route = useRoute();
		const store = useStore();

		const selectedPlanId = computed(() => {
			let planId = "";
			if (route.query) {
				if (route.query.plan === "monthly-50") planId = "p001";
				if (route.query.plan === "yearly-500") planId = "p002";
				if (route.query.plan === "forever") planId = "p003";
				if (route.query.plan === "business-2") planId = "tp001";
				if (route.query.plan === "business-5") planId = "tp002";
				if (route.query.plan === "business-10") planId = "tp003";
				if (route.query.plan === "business-25") planId = "tp004";
				if (route.query.plan === "business-50") planId = "tp005";
				return planId;
			} else return null;
		});
		const currentPlanViaParam = () => store.dispatch("home/plans/setSelectedPlan", { planId: selectedPlanId.value });
		currentPlanViaParam();

		return { setCurrentTab };
	},
};
</script>

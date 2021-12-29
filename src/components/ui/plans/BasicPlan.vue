<template>
	<div class="flex-1 mx-auto plan-wrap md:mx-1 lg:mx-0">
		<div
			class="relative z-10 flex w-auto h-full px-6 pt-5 pb-6 mx-auto mb-5 text-center plan card lg:mb-0 lg:mx-3 md:px-4"
			style="max-width: 437px;"
			:class="{ 'plan-primary': plan.primary }"
		>
			<div class="flex flex-col justify-around w-full h-full">
				<div class="flex items-center mb-8">
					<h5 class="ml-auto text-base text-black font-IranSans">
						<router-link :to="plan.url">{{ periodicityPersian }}</router-link>
					</h5>
					<div class="relative leading-none text-3lg plan-price font-IranSans">
						<div class="relative flex items-baseline text-blue-400 font-IranSans">
							<span>{{ plan.price }}</span>
							<span>&#160;تومان</span>
						</div>
					</div>
				</div>
				<router-link :to="plan.url" class="flex justify-center">
					<img :src="plan.img" alt="Monthly" class="relative -top-7" width="165" height="120" loading="lazy" />
				</router-link>
				<p class="mb-8 -mt-2 text-lg text-gray-700 font-IranSans md:text-sm lg:text-base">
					{{ plan.description }}
				</p>
				<router-link
					:to="plan.url"
					class="w-full px-8 py-3 leading-none text-center text-black transition-all duration-150 bg-gray-100 border border-transparent mobile:mx-auto hover:border-blue-400 hover:text-blue-400 font-IranSans rounded-2xl plan-start-learning-button"
					:class="{ 'plan-primary-button': plan.primary }"
					>شروع یادگیری
				</router-link>
			</div>
		</div>
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
	setup(props) {
		const periodicityPersian = computed(() => {
			let periodicityPersian = "";
			if (props.periodicity === "monthly") periodicityPersian = "ماهانه";
			if (props.periodicity === "yearly") periodicityPersian = "سالانه";
			if (props.periodicity === "lifetime") periodicityPersian = "مادام العمر";
			return periodicityPersian;
		});

		return {
			periodicityPersian,
		};
	},
};
</script>

<style scoped>
@media (min-width: 768px) {
	.plan-start-learning-button {
		margin-left: auto;
		margin-right: auto;
		max-width: 85%;
	}
}

@media (min-width: 992px) {
	.plan-wrap {
		height: 358px;
		max-width: 290px;
	}
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

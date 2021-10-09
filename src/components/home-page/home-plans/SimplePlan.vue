<template>
	<div class="flex-1 mx-auto plan-wrap md:mx-1 lg:mx-0">
		<div
			class="relative z-10 flex w-auto h-full px-6 pt-5 pb-6 mx-auto mb-5 text-center plan card lg:mb-0 lg:mx-3 md:px-4"
			:class="{ 'plan-primary': primary }"
		>
			<div class="flex flex-col justify-around w-full h-full">
				<div class="flex items-center mb-8">
					<h5 class="ml-auto text-base text-black font-IranSans">
						<router-link :to="route">{{ periodicityPersian }}</router-link>
					</h5>
					<div class="relative text-xl leading-none plan-price font-IranSans">
						<div class="relative flex items-baseline text-blue-400 font-IranSans">
							<span>{{ price }}</span>
							<span>&#160;تومان</span>
						</div>
					</div>
				</div>
				<router-link :to="route" class="flex justify-center">
					<img :src="img" alt="Monthly" class="relative -top-7" width="165" height="120" loading="lazy" />
				</router-link>
				<p class="mb-8 -mt-2 text-lg text-gray-700 font-IranSans md:text-base">
					{{ description }}
				</p>
				<router-link
					:to="route"
					class="w-full px-8 py-3 leading-none text-center text-black transition-all duration-150 font-IranSans rounded-3xl plan-start-learning-button"
					:class="{ 'plan-primary-button': primary }"
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
		periodicity: {
			type: String,
			required: true,
		},
		price: {
			type: String,
			required: true,
		},
		img: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		route: {
			type: String,
			required: true,
		},
		primary: {
			type: Boolean,
			required: false,
			default: false,
		},
	},
	setup(props) {
		const periodicityPersian = computed(() => {
			if (props.periodicity === "monthly") return "ماهانه";
			else if (props.periodicity === "yearly") return "سالانه";
			else return "مادام العمر";
		});

		return {
			periodicityPersian,
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

<template>
	<keep-alive>
		<component v-bind="dynamicProps" :is="currentTab"></component>
	</keep-alive>
</template>

<script>
import { computed } from "vue";

import JoinPlans from "./JoinPlans.vue";
import JoinFAQ from "./JoinFAQ.vue";

export default {
	props: {
		isJoinVisible: {
			type: Boolean,
			required: true,
			default: false,
		},
		isFAQVisible: {
			type: Boolean,
			required: true,
			default: false,
		},
	},
	components: {
		JoinPlans,
		JoinFAQ,
	},
	setup(props) {
		const currentTab = computed(() => {
			if (props.isJoinVisible) return "join-plans";
			else return "join-f-a-q";
		});

		const dynamicProps = computed(() => {
			if (currentTab.value === "join-plans") return { isVisible: props.isJoinVisible };
			else return { isVisible: props.isFAQVisible };
		});

		return {
			currentTab,
			dynamicProps,
		};
	},
};
</script>

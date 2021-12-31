<template>
	<div class="grid mx-auto gap-x-2 gap-y-4 widescreen:mx-10" style="grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));">
		<topic-item v-for="topic in topics" :key="topic.name" :item="topic"></topic-item>
	</div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import TopicItem from "@/components/ui/TopicItem.vue";

export default {
	components: {
		TopicItem,
	},
	setup() {
		const store = useStore();
		const topics = computed(() => store.getters["topics/toolingTopics"]);

		return {
			topics,
		};
	},
};
</script>

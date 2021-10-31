<template>
	<div class="grid mx-auto gap-x-2 gap-y-4 widescreen:mx-10" style="grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));">
		<topic-item
			v-for="topic in topics"
			:key="topic.name"
			:name="topic.name"
			:imgSource="topic.imgSource"
			:seriesCount="topic.seriesCount"
			:videosCount="topic.videosCount"
			:url="topic.url"
		></topic-item>
	</div>
</template>

<script>
import topicsData from "./all.js";

import TopicItem from "./TopicItem.vue";

export default {
	components: {
		TopicItem,
	},
	setup() {
		const topics = topicsData;

		return {
			topics,
		};
	},
};
</script>

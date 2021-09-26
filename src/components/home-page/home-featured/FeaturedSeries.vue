<template>
	<div class="flex mx-auto max-w-screen-2xl">
		<div class="flex-1 space-y-4">
			<featured-item
				v-for="col in col1"
				:key="col.name"
				:category="col.category"
				:name="col.name"
				:description="col.description"
				:level="col.level"
				:lessonsCount="col.lessonsCount"
				:totalTime="col.totalTime"
				:route="col.route"
				:imgSource="col.imgSource"
				:mode="col.mode"
			></featured-item>
		</div>
		<div class="flex-1 space-y-4">
			<featured-item
				v-for="col in col2"
				:key="col.name"
				:category="col.category"
				:name="col.name"
				:description="col.description"
				:level="col.level"
				:lessonsCount="col.lessonsCount"
				:totalTime="col.totalTime"
				:route="col.route"
				:imgSource="col.imgSource"
				:mode="col.mode"
			></featured-item>
		</div>
		<div class="flex-1 space-y-4">
			<featured-item
				v-for="col in col3"
				:key="col.name"
				:category="col.category"
				:name="col.name"
				:description="col.description"
				:level="col.level"
				:lessonsCount="col.lessonsCount"
				:totalTime="col.totalTime"
				:route="col.route"
				:imgSource="col.imgSource"
				:mode="col.mode"
			></featured-item>
		</div>
		<div class="flex-1 space-y-4">
			<featured-item
				v-for="col in col4"
				:key="col.name"
				:category="col.category"
				:name="col.name"
				:description="col.description"
				:level="col.level"
				:lessonsCount="col.lessonsCount"
				:totalTime="col.totalTime"
				:route="col.route"
				:imgSource="col.imgSource"
				:mode="col.mode"
			></featured-item>
		</div>
	</div>
</template>

<script>
import { col1Data, col2Data, col3Data, col4Data } from "./data.js";
import FeaturedItem from "./FeaturedItem.vue";

export default {
	components: {
		FeaturedItem,
	},
	setup() {
		const col1 = col1Data;
		const col2 = col2Data;
		const col3 = col3Data;
		const col4 = col4Data;

		console.log(col1);

		return {
			col1,
			col2,
			col3,
			col4,
		};
	},
};
</script>

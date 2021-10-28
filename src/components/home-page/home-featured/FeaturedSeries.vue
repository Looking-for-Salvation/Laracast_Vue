<template>
	<div class="mx-auto md:space-x-5 md:flex" style="max-width: 1500px;">
		<div class="flex-1 mb-4 space-y-4 md:mb-0" id="first">
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
		<div class="flex-1 hidden space-y-4 xl:block">
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
		<div class="flex-1 hidden space-y-4 widescreen:block" id="last">
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

		return {
			col1,
			col2,
			col3,
			col4,
		};
	},
};
</script>

<style scoped>
@media (min-width: 768px) {
	#first {
		/* --tw-space-x-reverse: 0; */
		margin-left: 1.25rem;
		/* margin-right: calc(1.25 rem * var(--tw-space-x-reverse)); */
	}
	#last {
		margin-right: 0;
		margin-left: 0;
	}
}
</style>

<template>
	<div class="container mt-8" style="max-width: 1166px;">
		<div class="grid gap-y-6 featured-items gap-x-10">
			<featured-item
				v-for="item in items"
				:key="item.name"
				:category="item.category"
				:name="item.name"
				:description="item.description"
				:level="item.level"
				:lessonsCount="item.lessonsCount"
				:totalTime="item.totalTime"
				:route="item.route"
				:imgSource="item.imgSource"
				:mode="item.mode"
			></featured-item>
		</div>
	</div>
</template>

<script>
import FeaturedItem from "@/components/home-page/home-featured/FeaturedItem.vue";

export default {
	components: {
		FeaturedItem,
	},
	props: {
		items: {
			type: Array,
			required: true,
		},
	},
};
</script>

<style scoped>
.featured-items {
	grid-template-columns: repeat(auto-fill, minmax(292px, 1fr));
}

@media (min-width: 768) {
	.featured-items {
		grid-template-columns: repeat(auto-fill, minmax(345px, 1fr));
	}
}
</style>

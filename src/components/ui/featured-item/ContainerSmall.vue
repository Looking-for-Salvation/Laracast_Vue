<template>
	<div class="container mt-8" style="max-width: 1166px;">
		<div class="grid gap-y-6 featured-items gap-x-10">
			<featured-item-basic v-for="item in items" :key="item.name" :item="item"></featured-item-basic>
		</div>
	</div>
</template>

<script>
import FeaturedItemBasic from "@/components/ui/featured-item/FeaturedItemBasic.vue";

export default {
	components: {
		FeaturedItemBasic,
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

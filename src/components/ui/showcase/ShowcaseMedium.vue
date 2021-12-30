<template>
	<div class="container relative px-6 py-6 overflow-hidden bg-white featured-collection md:flex rounded-xl is-trending lg:py-9" style="max-width: 1166px;">
		<div class="lg:-my-5">
			<h1 v-show="header.enabled" class="mb-3 text-center text-white font-IranSans">{{ header.title }}</h1>
			<div class="md:grid md:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-5 lg:py-6" style="justify-items: center;">
				<showcase-item-square v-for="item in items" :key="item.name" :item="item"></showcase-item-square>
			</div>
		</div>
	</div>
</template>

<script>
import ShowcaseItemSquare from "@/components/ui/showcase/ShowcaseItemSquare.vue";

export default {
	components: {
		ShowcaseItemSquare,
	},
	props: {
		items: {
			type: Array,
			required: true,
		},
		header: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style scoped>
.featured-collection.is-trending {
	background-image: linear-gradient(90deg, #324466, #60799e 79%);
}
</style>

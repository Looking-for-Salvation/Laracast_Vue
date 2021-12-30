<template>
	<div
		class="container relative px-6 py-6 overflow-hidden bg-white featured-collection md:flex rounded-xl lg:py-9 lg:px-10"
		:class="{
			'is-trending': data.category === 'trending',
			'is-frameworks': data.category === 'frameworks',
			'is-techniques': data.category === 'techniques',
			'is-testing': data.category === 'testing',
		}"
		style="max-width: 1166px;"
	>
		<div class="items-center text-white" :class="{ 'lg:flex': data.category === 'trending', flex: data.category !== 'trending' }">
			<div class="flex-shrink-0 hidden" :class="{ 'lg:block': data.category === 'trending', 'xl:block': data.category !== 'trending' }">
				<img
					:src="data.thumbnail"
					class="skill-thumbnail lazyloaded"
					:class="{ 'absolute right-0 fliped': data.category === 'trending' }"
					:style="inlineStyles"
				/>
			</div>
			<div class="md:flex" :class="{ items: data.category === 'trending', 'w-full': data.category !== 'trending' }">
				<div class="mb-4 space-y-4 md:flex-1 md:ml-8 md:mb-0">
					<showcase-item-wide v-for="item in data.firstCol" :key="item.name" :item="item"></showcase-item-wide>
				</div>
				<div class="space-y-4 md:flex-1">
					<showcase-item-wide v-for="item in data.secondCol" :key="item.name" :item="item"></showcase-item-wide>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { computed } from "vue";
import ShowcaseItemWide from "@/components/ui/showcase/ShowcaseItemWide.vue";

export default {
	components: {
		ShowcaseItemWide,
	},
	props: {
		data: {
			type: Object,
			required: true,
		},
	},
	setup(props) {
		const inlineStyles = computed(() => {
			if (props.data.category === "trending") return { mixBlendMode: "luminosity", bottom: "-10px", opacity: "0.5" };
			else return "";
		});

		return { inlineStyles };
	},
};
</script>

<style scoped>
.featured-collection.is-trending {
	background-image: linear-gradient(90deg, #324466, #60799e 79%);
}

.featured-collection.is-frameworks {
	background-image: linear-gradient(270deg, #ec454f, #334567 79%);
}

.featured-collection.is-testing {
	background-image: linear-gradient(270deg, #45957b, #36486a 79%);
}

@media (min-width: 992px) {
	.featured-collection.is-trending .items {
		padding-right: 250px;
	}
}

@media (min-width: 1200px) {
	.featured-collection.is-frameworks .skill-thumbnail {
		margin-right: 25px;
		width: 285px;
	}

	.featured-collection.is-testing .skill-thumbnail {
		right: -40px;
		margin-right: 25px;
		position: relative;
		width: 400px;
	}
}
</style>

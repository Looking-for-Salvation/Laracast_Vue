<template>
	<div
		class="container relative px-6 py-6 overflow-hidden bg-white featured-collection md:flex rounded-xl is-testing lg:py-9 lg:px-10"
		style="max-width: 1166px;"
	>
		<div class="flex items-center text-white">
			<div class="flex-shrink-0 hidden xl:block">
				<img src="../../../assets/images/series/test/journey-testing.svg" class="skill-thumbnail lazyloaded" />
			</div>
			<div class="w-full md:flex">
				<div class="mb-4 space-y-4 md:flex-1 md:mb-0 md:ml-8">
					<router-link
						v-for="item in col1"
						:to="item.url"
						:key="item.name"
						class="flex items-center text-white transition-all bg-transparent font-IranSans hover:bg-black hover:bg-opacity-10 rounded-xl group"
					>
						<div class="flex items-center flex-shrink-0 p-3 ml-4 transition-all bg-black bg-opacity-10 group-hover:bg-transparent rounded-xl">
							<img :src="item.imgSource" :alt="item.name" class="lazyloaded" width="76" height="76" />
						</div>
						<div class="flex-1 lg:pl-6">
							<h5 class="mb-2 -mt-1 clamp one-line">{{ item.name }}</h5>
							<p class="opacity-50 text-2xs clamp two-lines">{{ item.description }}</p>
						</div>
					</router-link>
				</div>
				<div class="space-y-4 md:flex-1">
					<router-link
						v-for="item in col2"
						:to="item.url"
						:key="item.name"
						class="flex items-center text-white transition-all bg-transparent font-IranSans hover:bg-black hover:bg-opacity-10 rounded-xl group"
					>
						<div class="flex items-center flex-shrink-0 p-3 ml-4 transition-all bg-black bg-opacity-10 group-hover:bg-transparent rounded-xl">
							<img :src="item.imgSource" :alt="item.name" class="lazyloaded" width="76" height="76" />
						</div>
						<div class="flex-1 lg:pl-6">
							<h5 class="mb-2 -mt-1 clamp one-line">{{ item.name }}</h5>
							<p class="opacity-50 text-2xs clamp two-lines">{{ item.description }}</p>
						</div>
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		col1: {
			type: Array,
			required: true,
		},
		col2: {
			type: Array,
			required: true,
		},
	},
};
</script>

<style scoped>
.featured-collection.is-testing {
	background-image: linear-gradient(270deg, #45957b, #36486a 79%);
}

@media (min-width: 1200px) {
	.featured-collection.is-testing .skill-thumbnail {
		right: -40px;
		margin-right: 25px;
		position: relative;
		width: 400px;
	}
}
</style>

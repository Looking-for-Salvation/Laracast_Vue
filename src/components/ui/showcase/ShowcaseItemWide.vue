<template>
	<router-link
		:to="item.url"
		class="flex items-center text-white transition-all duration-300 bg-transparent hover:bg-black hover:bg-opacity-10 group rounded-xl"
	>
		<div class="flex items-center flex-shrink-0 p-3 ml-4 transition-all duration-300 bg-black bg-opacity-10 group-hover:bg-opacity-0 rounded-xl">
			<img :src="item.img" :alt="item.name" class="lazyloaded" :class="{ 'rounded-full': item.square }" width="76" height="76" />
		</div>
		<div class="flex-1 lg:pl-6">
			<h5 class="mb-2 -mt-1 font-IranSans clamp one-line">{{ item.name }}</h5>
			<p class="opacity-50 text-2xs clamp two-lines">{{ item.description }}</p>
		</div>
	</router-link>
</template>

<script>
export default {
	props: {
		item: {
			type: Object,
			required: true,
		},
	},
};
</script>

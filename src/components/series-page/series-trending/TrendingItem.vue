<template>
	<router-link :to="url" class="flex items-center text-white transition-all duration-300 bg-transparent hover:bg-black hover:bg-opacity-10 group rounded-xl">
		<div class="flex items-center flex-shrink-0 p-3 ml-4 transition-all duration-300 bg-black bg-opacity-10 group-hover:bg-opacity-0 rounded-xl">
			<img :src="imgSource" :alt="name" class="lazyloaded" :class="{ 'rounded-full': square }" width="76" height="76" />
		</div>
		<div class="flex-1 lg:pl-6">
			<h5 class="mb-2 -mt-1 font-IranSans clamp one-line">{{ name }}</h5>
			<p class="opacity-50 text-2xs clamp two-lines">{{ description }}</p>
		</div>
	</router-link>
</template>

<script>
export default {
	props: {
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		imgSource: {
			type: String,
			required: true,
		},
		url: {
			type: String,
			required: true,
		},
		square: {
			type: Boolean,
			required: false,
			default: false,
		},
	},
};
</script>

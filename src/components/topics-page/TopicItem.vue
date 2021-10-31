<template>
	<div class="flex justify-center text-center">
		<router-link :to="url" class="flex flex-col justify-between w-full h-full px-4 py-1 mx-2 bg-white card" style="height: 84px; min-width: 205px;">
			<div class="flex items-center flex-1">
				<div class="flex justify-center ml-4">
					<img :src="imgSource" :alt="name" width="50" height="50" class="lazyloaded" />
				</div>
				<div>
					<h2 class="text-sm text-right text-black font-IranSans">{{ name }}</h2>
					<div class="text-gray-700 font-IranSans text-2xs opacity-60">
						{{ `${seriesCount} دوره` }}
						<span class="relative inline-block px-1 text-xs" style="top: 1px;"> • </span>
						{{ `${videosCount} ویدیو` }}
					</div>
				</div>
			</div>
		</router-link>
	</div>
</template>

<script>
export default {
	props: {
		name: {
			type: String,
			required: true,
		},
		imgSource: {
			type: String,
			required: true,
		},
		seriesCount: {
			type: Number,
			required: true,
		},
		videosCount: {
			type: Number,
			required: true,
		},
		url: {
			type: String,
			required: true,
		},
	},
	setup() {},
};
</script>

<style scoped></style>

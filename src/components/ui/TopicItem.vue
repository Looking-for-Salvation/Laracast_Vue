<template>
	<div class="flex justify-center text-center">
		<router-link :to="item.url" class="flex flex-col justify-between w-full h-full px-4 py-1 mx-2 bg-white card" style="height: 84px; min-width: 205px;">
			<div class="flex items-center flex-1">
				<div class="flex justify-center ml-4">
					<img :src="item.img" :alt="item.name" width="50" height="50" class="lazyloaded" />
				</div>
				<div>
					<h2 class="text-sm text-right text-black font-IranSans">{{ item.name }}</h2>
					<div class="text-gray-700 font-IranSans text-2xs opacity-60">
						{{ `${item.seriesCount} دوره` }}
						<span class="relative inline-block px-1 text-xs" style="top: 1px;"> • </span>
						{{ `${item.videosCount} ویدیو` }}
					</div>
				</div>
			</div>
		</router-link>
	</div>
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

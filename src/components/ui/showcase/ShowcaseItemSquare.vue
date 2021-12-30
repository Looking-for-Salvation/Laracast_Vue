<template>
	<div class="relative flex-1 w-full mb-4 overflow-hidden text-center md:mx-2 md:mb-0">
		<router-link
			:to="item.url"
			class="flex flex-col items-center px-4 py-2 text-white transition-all bg-black group bg-opacity-3 hover:bg-opacity-10 rounded-xl"
		>
			<div class="flex-shrink-0">
				<div class="flex items-center p-1 bg-black rounded-full bg-opacity-10">
					<img :src="item.img" :alt="item.name" class="lazyloaded" width="64" height="64" />
				</div>
			</div>
			<div class="flex flex-col justify-between flex-1 py-2">
				<header class="mb-2 font-IranSans">
					<h5 class="md:text-sm clamp one-line">{{ item.name }}</h5>
					<h6 class="opacity-50 text-2xs">{{ `${item.date.year}, ${item.date.day} ${item.date.month}` }}</h6>
				</header>
				<p class="max-w-sm opacity-50 text-2xs description clamp three-lines font-IranSans">{{ item.description }}</p>
				<p class="hidden py-2 button button-ghost slide-up-button lg:block font-IranSans">شروع دوره</p>
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
	setup() {},
};
</script>

<style scoped>
.button {
	border-radius: 20px;
	border-style: solid;
	border-width: 1px;
	font-size: 0.834rem;
	line-height: 1;
	text-align: center;
}

.button:hover {
	--tw-text-opacity: 1;
	border-color: currentColor;
	color: rgba(50, 138, 241, var(--tw-text-opacity));
}

@media (min-width: 768px) {
	.button-ghost {
		padding-left: 1.5rem;
		padding-right: 1.5rem;
	}
}

@media (min-width: 992px) {
	.group:hover .description {
		visibility: hidden;
	}
}

.button-ghost {
	--tw-text-opacity: 1;
	background-color: hsla(0, 0%, 100%, 0.1);
	border-color: hsla(0, 0%, 100%, 0.1);
	color: rgba(255, 255, 255, var(--tw-text-opacity));
	transition-duration: 0.15s;
	transition-property: all;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.button-ghost:hover {
	--tw-border-opacity: 1;
	--tw-bg-opacity: 1;
	background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
	border-color: rgba(50, 138, 241, var(--tw-border-opacity));
}

.group:hover .slide-up-button {
	opacity: 1;
	transform: translateY(-15px);
}

.slide-up-button {
	bottom: 0;
	left: 0;
	margin-left: 10%;
	margin-right: 10%;
	opacity: 0;
	position: absolute;
	transform: translateY(10px);
	transition: opacity 0.2s, transform 0.3s, border-color 0.3s, background-color 0.3s;
	transition-timing-function: ease-in-out;
	width: 80%;
}
</style>

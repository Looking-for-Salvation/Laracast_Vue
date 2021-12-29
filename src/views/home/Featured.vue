<template>
	<section class="md:pt-[20px] md:pb-[35px]">
		<div class="mx-auto overflow-hidden featured-series">
			<div class="flex justify-center mb-4 text-center md:w-2/3 xl:w-1/2 md:mx-auto font-IranSans">
				<header class="container max-w-[650px]] pb-4 mx-auto mb-4 text-center text-black">
					<h3 class="mb-4 text-3xl font-light">به دنبال یادگیری کدوم تکنولوژی هستی؟</h3>
					<p class="font-light text-2lg opacity-70">با استفاده از ویدیو های لاراکست تکنولوژی دلخواهتون رو به صورت کامل یاد بگیرید.</p>
				</header>
			</div>
			<featured-container></featured-container>
		</div>
	</section>
</template>

<script>
import FeaturedContainer from "./featured/Container.vue";

export default {
	components: {
		FeaturedContainer,
	},
};
</script>

<style scoped></style>

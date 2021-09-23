<template>
	<div>
		<div class="home-banner">
			<div class="inner-banner">
				<the-header transparent home></the-header>
			</div>
		</div>
	</div>
</template>

<script>
import TheHeader from "../ui/TheHeader.vue";

export default {
	components: {
		TheHeader,
	},
};
</script>

<style scoped>
.home-banner {
	background-image: radial-gradient(circle at 51% 111%, #1285f3, #003a99 86%);
	mask: url("../../assets/images/home/home-bg-mask.svg");
	-webkit-mask: url("../../assets/images/home/home-bg-mask.svg");
}

.inner-banner {
	min-height: 795px;
}
</style>

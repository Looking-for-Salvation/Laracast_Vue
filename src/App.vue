<template>
	<router-view></router-view>
</template>

<script>
export default {
	name: "App",
};
</script>

<style>
:root {
	font-size: 15px;
}

.section,
section {
	padding: 40px 30px;
	position: relative;
}

.rtl {
	direction: rtl;
}

.card {
	--bg-opacity: 1;
	--text-opacity: 1;
	background-color: rgba(255, 255, 255, var(--bg-opacity));
	border-color: rgba(120, 144, 156, 0.15);
	border-radius: 0.9rem;
	border-width: 1px;
	color: rgba(34, 41, 47, var(--text-opacity));
	margin-left: auto;
	margin-right: auto;
	max-width: 100%;
	overflow: hidden;
	position: relative;
	width: 345px;
}
</style>

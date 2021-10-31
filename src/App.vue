<template>
	<div id="root" class="page xl:flex">
		<div class="w-full xl:flex-1">
			<router-view></router-view>
			<the-footer></the-footer>
		</div>
	</div>
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

.page {
	background-color: #f7f8fc;
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

.input {
	height: 42px;
	max-width: 100%;
	width: 100%;
}

.textarea {
	display: block;
	line-height: 1.2;
	max-height: 600px;
	max-width: 100%;
	min-width: 100%;
	padding: 10px;
	resize: vertical;
}

.input,
.textarea {
	align-items: center;
	-moz-appearance: none;
	-webkit-appearance: none;
	background-color: #fff;
	border: 1px solid #d7d7d7;
	border-radius: 3px;
	border-radius: 0;
	box-shadow: none;
	color: #22292f;
	display: inline-flex;
	font-size: 16px;
	height: 32px;
	justify-content: flex-start;
	line-height: 24px;
	outline: 0;
	padding: 0 15px;
	position: relative;
	vertical-align: top;
}

.input.is-minimal,
.textarea.is-minimal {
	--tw-border-opacity: 1;
	background: 0 0;
	border: none;
	border-bottom: 1px solid;
	border-color: rgba(246, 246, 246, var(--tw-border-opacity));
	padding-left: 0;
	padding-right: 0;
}

.control:not(:last-child) {
	margin-bottom: 1.3em;
}

.plan {
	border: 1px solid rgba(36, 37, 38, 0.08);
	max-width: 437px;
}

.lazyloaded {
	opacity: 1;
	transition: opacity 1s ease;
}

.inherits-color {
	color: inherit;
}
</style>

<template>
	<router-view name="rootroute"></router-view>
	<div id="root" class="page xl:flex">
		<div class="w-full xl:flex-1">
			<router-view></router-view>
			<router-view name="footer"></router-view>
		</div>
	</div>
</template>

<template>
	<section>
		<div class="container" style="max-width: 1166px;">
			<header class="container text-center text-black mb-4 mx-auto pb-4 max-w-[650px]">
				<h3 class="text-3xl md:font-light font-IranSans">با تیم لاراکست آشنا شید</h3>
			</header>
			<div class="grid gap-6 lg:grid-cols-3 md:mb-10 pt-7">
				<team-card v-for="member in members" :key="member.name" :member="member"></team-card>
			</div>
		</div>
	</section>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import TeamCard from "@/components/ui/TeamCard.vue";

export default {
	components: {
		TeamCard,
	},
	setup() {
		const store = useStore();
		const members = computed(() => store.getters["home/TeamMembers"]);

		return { members };
	},
};
</script>

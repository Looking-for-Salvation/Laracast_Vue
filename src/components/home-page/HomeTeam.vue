<template>
	<section>
		<div class="container" style="max-width: 1166px;">
			<header class="container text-center text-black mb-4 mx-auto pb-4 max-w-[650px]">
				<h3 class="text-3xl md:font-light font-IranSans">با تیم لاراکست آشنا شید</h3>
			</header>
			<div class="grid gap-6 lg:grid-cols-3 md:mb-10 pt-7">
				<team-member
					v-for="member in members"
					:key="member.name"
					:name="member.name"
					:role="member.role"
					:img="member.img"
					:twitter="member.twitter"
					:biography="member.biography"
				></team-member>
			</div>
		</div>
	</section>
</template>

<script>
import TeamMember from "./home-team/TeamMember.vue";
import membersData from "./home-team/data.js";

export default {
	components: {
		TeamMember,
	},
	setup() {
		const members = membersData;

		return {
			members,
		};
	},
};
</script>

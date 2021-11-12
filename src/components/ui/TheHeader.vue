<template>
	<nav
		class="z-50 h-16 py-4 section header-nav"
		:class="{ 'bg-transparent': transparent, 'header-background': !transparent, 'md:pt-7 md:pb-4': home, 'lg:py-3': !home }"
	>
		<div class="relative flex items-center justify-between h-full" :class="{ 'home-nav': home }">
			<div id="header-logo" class="flex ml-4 xl:w-1/4 xl:ml-0">
				<router-link to="/" class="inline-block leading-none cursor-pointer">
					<svg id="logo-full-white" viewBox="11.499815940856934 200.39300537109375 617.3845825195312 74.19113159179688" width="145" height="21">
						<defs>
							<symbol id="Symbol-2" preserveAspectRatio="none" width="447.4" height="44.3" viewBox="0 0 447.4 44.3" overflow="visible">
								<g fill="none" fill-rule="evenodd" transform="translate(223.7,22.1) scale(2.784,2.784) translate(-80.3,-8.8)">
									<path
										d="M0 1.1h3.5v12.4h7.6v2.9h-11.1v-15.3Zm26.7 12h-7l-1.4 3.3h-3.5l6.7-15.3h3.4l6.8 15.3h-3.7l-1.3-3.3Zm-1.1-2.7l-2.4-5.9l-2.4 5.9h4.8Zm20.9 6l-2.9-4.3h-3.2v4.3h-3.5v-15.3h6.5c1.3 0 2.5 .2 3.5 .6c1 .5 1.7 1.1 2.2 2c.6 .8 .8 1.8 .8 2.9c0 1.2-0.2 2.2-0.8 3c-0.5 .8-1.3 1.4-2.3 1.9l3.4 4.9h-3.7Zm-0.1-9.8c0-0.8-0.3-1.5-0.8-2c-0.6-0.4-1.4-0.6-2.4-0.6h-2.8v5.3h2.8c1 0 1.8-0.2 2.4-0.7c.5-0.5 .8-1.1 .8-2Zm19.8 6.5h-7l-1.3 3.3h-3.6l6.7-15.3h3.5l6.7 15.3h-3.6l-1.4-3.3Zm-1.1-2.7l-2.4-5.9l-2.3 5.9h4.7Zm18.3 6.3c-1.5 0-2.9-0.4-4.2-1c-1.2-0.7-2.2-1.7-2.9-2.9c-0.7-1.2-1.1-2.5-1.1-4.1c0-1.5 .4-2.8 1.1-4.1c.7-1.2 1.7-2.1 2.9-2.8c1.3-0.7 2.7-1 4.2-1c1.3 0 2.5 .2 3.6 .7c1 .5 1.9 1.1 2.6 2l-2.2 2.1c-1-1.2-2.3-1.8-3.8-1.8c-0.9 0-1.8 .2-2.5 .7c-0.7 .4-1.3 .9-1.7 1.7c-0.4 .7-0.6 1.6-0.6 2.5c0 1 .2 1.8 .6 2.6c.4 .7 1 1.3 1.7 1.7c.7 .4 1.6 .7 2.5 .7c1.5 0 2.8-0.7 3.8-1.9l2.2 2.1c-0.7 .9-1.6 1.6-2.6 2.1c-1.1 .4-2.3 .7-3.6 .7Zm37 0c-1.2 0-2.4-0.2-3.5-0.5c-1.1-0.3-2-0.8-2.7-1.3l1.2-2.7c.6 .5 1.4 .9 2.3 1.2c.9 .3 1.8 .4 2.7 .4c1 0 1.7-0.1 2.2-0.4c.5-0.3 .7-0.7 .7-1.2c0-0.4-0.1-0.7-0.4-0.9c-0.3-0.3-0.7-0.5-1.1-0.6c-0.4-0.2-1-0.3-1.8-0.5c-1.1-0.3-2.1-0.5-2.8-0.8c-0.7-0.3-1.4-0.7-1.9-1.4c-0.5-0.6-0.8-1.4-0.8-2.4c0-0.9 .3-1.7 .7-2.4c.5-0.8 1.2-1.3 2.2-1.8c.9-0.4 2.1-0.6 3.5-0.6c.9 0 1.9 .1 2.8 .3c.9 .3 1.7 .6 2.4 1.1l-1.1 2.7c-1.4-0.8-2.7-1.2-4.1-1.2c-1 0-1.7 .1-2.2 .4c-0.5 .4-0.7 .8-0.7 1.3c0 .5 .3 .9 .8 1.2c.5 .2 1.4 .5 2.5 .7c1.1 .3 2.1 .6 2.8 .9c.7 .2 1.4 .7 1.9 1.3c.5 .6 .8 1.4 .8 2.4c0 .9-0.3 1.7-0.8 2.4c-0.4 .7-1.2 1.3-2.1 1.7c-1 .5-2.2 .7-3.5 .7Zm15.3-12.7h-4.9v-2.9h13.2v2.9h-4.8v12.4h-3.5v-12.4Zm18.6 12.7c-1.2 0-2.3-0.2-3.5-0.5c-1.1-0.3-2-0.8-2.6-1.3l1.1-2.7c.7 .5 1.5 .9 2.4 1.2c.8 .3 1.7 .4 2.6 .4c1 0 1.8-0.1 2.2-0.4c.5-0.3 .7-0.7 .7-1.2c0-0.4-0.1-0.7-0.4-0.9c-0.3-0.3-0.6-0.5-1.1-0.6c-0.4-0.2-1-0.3-1.7-0.5c-1.2-0.3-2.1-0.5-2.9-0.8c-0.7-0.3-1.3-0.7-1.8-1.4c-0.6-0.6-0.8-1.4-0.8-2.4c0-0.9 .2-1.7 .7-2.4c.5-0.8 1.2-1.3 2.1-1.8c1-0.4 2.1-0.6 3.5-0.6c1 0 1.9 .1 2.9 .3c.9 .3 1.7 .6 2.4 1.1l-1.1 2.7c-1.4-0.8-2.8-1.2-4.2-1.2c-1 0-1.7 .1-2.2 .4c-0.4 .4-0.7 .8-0.7 1.3c0 .5 .3 .9 .8 1.2c.6 .2 1.4 .5 2.5 .7c1.2 .3 2.1 .6 2.8 .9c.8 .2 1.4 .7 1.9 1.3c.5 .6 .8 1.4 .8 2.4c0 .9-0.2 1.7-0.7 2.4c-0.5 .7-1.2 1.3-2.2 1.7c-0.9 .5-2.1 .7-3.5 .7Z"
										fill="#fff"
										fill-rule="nonzero"
										transform="translate(80.3,8.8) translate(-80.3,-8.8)"
									></path>
								</g>
							</symbol>
							<symbol id="Symbol-1" preserveAspectRatio="none" width="159.1" height="159.2" viewBox="0 0 159.1 159.2" overflow="visible">
								<g id="logo-symbol-white" transform=" translate(92.8,0) translate(0,67.6) rotate(405) translate(-86.1,0) translate(0,-94.1)">
									<path
										id="left-base-5"
										d="M16.7 120.1h32.2c6.5 0 11.7 5.2 11.7 11.7c0 6.4-5.2 11.7-11.7 11.7h-32.2c-6.5 0-11.7-5.3-11.7-11.7c0-6.5 5.2-11.7 11.7-11.7Z"
										fill="#fafafa"
										transform="translate(32.8,131.8) rotate(-360) translate(-32.8,-131.8)"
										style="fill: rgb(250, 250, 250);"
									></path>
									<path
										id="right-base-5"
										d="M84.8 120.1h68.6c6.4 0 11.7 5.2 11.7 11.7c0 6.4-5.3 11.7-11.7 11.7h-68.6c-6.5 0-11.7-5.3-11.7-11.7c0-6.5 5.2-11.7 11.7-11.7Z"
										fill="#fafafa"
										transform="translate(119.1,131.8) rotate(-360) translate(-119.1,-131.8)"
										style="fill: rgb(250, 250, 250);"
									></path>
									<path
										id="left-pillar-5"
										d="M-15.2 62l132.1 1.9c6.7 .1 12.1 5.5 12.2 12.2c.1 6.4-5.1 11.7-11.5 11.8c-0.1 0-0.2 0-0.3 0l-132.1-1.9c-6.7-0.1-12.1-5.5-12.2-12.2c-0.1-6.4 5-11.7 11.5-11.8c.1 0 .2 0 .3 0Z"
										fill="#fafafa"
										transform="translate(51,75) rotate(-420) translate(-51,-75)"
										style="fill: rgb(250, 250, 250);"
									></path>
									<path
										id="right-pillar-5"
										d="M53.2 63.9l132.1-1.9c6.5-0.1 11.8 5 11.9 11.5c0 .1 0 .2 0 .3c-0.1 6.7-5.5 12.1-12.2 12.2l-132.1 1.9c-6.4 .1-11.7-5-11.8-11.4c0-0.2 0-0.3 0-0.4c.1-6.7 5.5-12.1 12.1-12.2Z"
										fill="#fafafa"
										transform="translate(119.1,75) rotate(-120) translate(-119.1,-75)"
										style="fill: rgb(250, 250, 250);"
									></path>
									<path
										id="spinner-tail-4"
										d="M52.8 119.7h64.7c6.7 0 12.1 5.4 12.1 12.1c0 6.7-5.4 12.1-12.1 12.1h-64.7c-6.7 0-12.1-5.4-12.1-12.1c0-6.7 5.4-12.1 12.1-12.1Z"
										fill="#53b5ff"
										transform=" translate(84.2,0) translate(0,131.8) rotate(-270) scale(1.046,1) scale(1,0.969) translate(-85.2,0) translate(0,-131.8)"
										style="fill: rgb(83, 181, 255);"
									></path>
									<path
										id="spinner-drop-3"
										d="M80.5 189h9.4c6.6 0 12.1 5.4 12.1 12.1c0 6.7-5.5 12.1-12.1 12.1h-9.4c-6.7 0-12.1-5.4-12.1-12.1c0-6.7 5.4-12.1 12.1-12.1Z"
										fill="#53b5ff"
										transform="translate(85.2,201.1) rotate(-270) translate(-85.2,-201.1)"
										style="opacity: 1;"
									></path>
								</g>
							</symbol>
						</defs>
						<use width="70.2" height="70.2" xlink:href="#Symbol-1" transform="translate(445.7,167.5) translate(-79.6,37.4)"></use>
						<use width="617.4" height="61.1" xlink:href="#Symbol-2" transform="translate(235,231.6) translate(-223.7,-22.1)"></use>
					</svg>
				</router-link>
			</div>
			<div
				class="relative hidden ml-auto nav-links xl:flex-grow md:flex md:justify-end lg:justify-around xl:w-1/2 font-IranSans xl:ml-0"
				style="max-width: 500px;"
				v-if="!home"
			>
				<router-link to="/browse" class="block text-white opacity-50 hover:opacity-100 nav-link xl:text-center md:px-3 xl:px-7">موضوعات</router-link>
				<router-link to="/series" class="block text-white opacity-50 hover:opacity-100 nav-link xl:text-center md:px-3 xl:px-7">دوره ها</router-link>
				<router-link to="/bits" class="block text-white opacity-50 hover:opacity-100 nav-link xl:text-center md:px-3 xl:px-7" id="larabits-link"
					>لارابیت</router-link
				>
				<router-link to="/discuss" class="block text-white opacity-50 hover:opacity-100 nav-link xl:text-center md:px-3 xl:px-7">انجمن</router-link>
				<router-link to="/podcast" class="block text-white opacity-50 hover:opacity-100 nav-link xl:text-center md:px-3 xl:px-7">پادکست</router-link>
			</div>
			<div class="flex items-center md:hidden">
				<button class="ml-4 leading-none" title="Press / or s anywhere to instantly activate me.">
					<svg width="20" viewBox="0 0 15 15" class="text-white">
						<g fill="none" fill-rule="evenodd">
							<path d="M-2-2h20v20H-2z"></path>
							<path
								class="fill-current"
								d="M10.443 9.232h-.638l-.226-.218A5.223 5.223 0 0 0 10.846 5.6 5.247 5.247 0 1 0 5.6 10.846c1.3 0 2.494-.476 3.414-1.267l.218.226v.638l4.036 4.028 1.203-1.203-4.028-4.036zm-4.843 0A3.627 3.627 0 0 1 1.967 5.6 3.627 3.627 0 0 1 5.6 1.967 3.627 3.627 0 0 1 9.232 5.6 3.627 3.627 0 0 1 5.6 9.232z"
							></path>
						</g>
					</svg>
				</button>
				<div>
					<a class="block leading-none" @click="openMobileNavModal">
						<div class="hamburger-nav">
							<span></span>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</a>
				</div>
			</div>
			<div class="relative hidden md:block xl:w-1/4">
				<div class="flex items-center justify-end ">
					<button
						title="Press / anywhere to activate me."
						class="w-auto p-3 leading-none transition-all duration-300 bg-white bg-opacity-10 hover:bg-opacity-25 rounded-xl"
					>
						<svg width="16" viewBox="0 0 15 15" class="text-white">
							<g fill="none" fill-rule="evenodd">
								<path d="M-2-2h20v20H-2z"></path>
								<path
									class="fill-current"
									d="M10.443 9.232h-.638l-.226-.218A5.223 5.223 0 0 0 10.846 5.6 5.247 5.247 0 1 0 5.6 10.846c1.3 0 2.494-.476 3.414-1.267l.218.226v.638l4.036 4.028 1.203-1.203-4.028-4.036zm-4.843 0A3.627 3.627 0 0 1 1.967 5.6 3.627 3.627 0 0 1 5.6 1.967 3.627 3.627 0 0 1 9.232 5.6 3.627 3.627 0 0 1 5.6 9.232z"
								></path>
							</g>
						</svg>
					</button>
					<a
						@click="openLoginModal"
						class="px-8 py-1.5 mr-5 text-base text-white transition-all duration-300 border rounded-full cursor-pointer font-IranSans hover:bg-white hover:text-blue-400 border-opacity-50"
						>ورود
					</a>
				</div>
			</div>
		</div>
	</nav>
	<join-modal></join-modal>
	<login-modal></login-modal>
	<sign-up-modal></sign-up-modal>
	<forgot-password-modal></forgot-password-modal>
	<mobile-nav-modal></mobile-nav-modal>
</template>

<script>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

import LoginModal from "./modals/LoginModal.vue";
import JoinModal from "./modals/JoinModal.vue";
import ForgotPasswordModal from "./modals/ForgotPasswordModal.vue";
import SignUpModal from "./modals/SignUpModal.vue";
import MobileNavModal from "./modals/MobileNavModal.vue";

export default {
	props: {
		transparent: {
			type: Boolean,
			required: false,
			default: false,
		},
		home: {
			type: Boolean,
			required: false,
			default: false,
		},
	},
	components: {
		LoginModal,
		JoinModal,
		SignUpModal,
		ForgotPasswordModal,
		MobileNavModal,
	},
	setup() {
		const route = useRoute();
		const store = useStore();

		const openLoginModal = () => store.dispatch("modals/openLogin");
		const openMobileNavModal = () => store.dispatch("modals/openMobileNav");

		const modalQuery = () => {
			if (route.query.modal === "join") store.dispatch("modals/openJoin");
		};

		onMounted(modalQuery);

		return {
			openMobileNavModal,
			openLoginModal,
		};
	},
};
</script>

<style scoped>
.home-nav {
	max-width: 1500px;
	margin-right: auto;
	margin-left: auto;
}

.header-background {
	background-image: linear-gradient(to right, rgb(91, 121, 162) 0%, rgb(46, 68, 105) 100%);
}

.router-active {
	opacity: 1;
}

.nav-link {
	position: relative;
}

@media (min-width: 1200px) {
	.nav-link::after {
		border-radius: 0.9rem;
		bottom: -19px;
		content: "";
		height: 4px;
		left: 20%;
		opacity: 0;
		pointer-events: none;
		position: absolute;
		transition: opacity 0.3s;
		width: 60%;
	}

	.nav-link:not(#larabits-link)::after {
		background: #fff;
	}

	#larabits-link.nav-link.router-active:after,
	#larabits-link.nav-link:hover:after {
		background: linear-gradient(
			270deg,
			#21c8f6 64%,
			transparent 0,
			transparent 68%,
			#21c8f6 0,
			#21c8f6 76%,
			transparent 0,
			transparent 80%,
			#21c8f6 0,
			#21c8f6 88%,
			transparent 0,
			transparent 92%,
			#21c8f6 0,
			#21c8f6
		);
		border-radius: 0;
		box-shadow: 0 0 6px 0 rgba(35, 201, 247, 0.43);
	}

	.nav-link.router-active::after,
	.nav-link:hover::after {
		opacity: 1;
	}
}

.hamburger-nav {
	cursor: pointer;
	height: 19px;
	position: relative;
	transform: rotate(180deg);
	transition: 0.5s ease-in-out;
	width: 22px;
}

.hamburger-nav span {
	background: #fff;
	border-radius: 9px;
	display: block;
	height: 3px;
	margin-left: auto;
	opacity: 1;
	position: absolute;
	right: 0;
	transform: rotate(0deg);
	transition: 0.25s ease-in-out;
	width: 100%;
}

.hamburger-nav span:first-child {
	top: 0;
}

.hamburger-nav span:nth-child(2),
.hamburger-nav span:nth-child(3) {
	top: 7px;
	width: 80%;
}

.hamburger-nav span:nth-child(4) {
	top: 14px;
	width: 60%;
}

.hamburger-nav.open span {
	width: 100%;
}
.hamburger-nav.open span:first-child,
.hamburger-nav.open span:nth-child(4) {
	right: 50%;
	top: 7px;
	width: 0;
}
.hamburger-nav.open span:nth-child(2) {
	transform: rotate(45deg);
}
.hamburger-nav.open span:nth-child(3) {
	transform: rotate(-45deg);
}
</style>

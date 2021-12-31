<template>
	<div>
		<main>
			<div>
				<the-header></the-header>
			</div>
			<section>
				<div class="container" style="max-width: 1500px;">
					<div
						class="relative mx-auto mb-6 is-topic banner rounded-xl lg:mb-9"
						style="background-image: linear-gradient(to right, rgb(91, 121, 162) 0%, rgb(46, 68, 105) 100%);"
					>
						<section class="py-10">
							<div class="container max-w-md py-6 text-center text-white">
								<h1 class="mb-6 text-5xl font-light font-IranSans">جستجو در موضوعات</h1>
								<p class="opacity-75 font-IranSans">
									تمامی دوره های لاراکست در موضوعات مختلف دسته بندی شده. این می تونه یه راه دیگه باشه واسه اینکه انتخاب کنی چی یادبگیری چه فریمورک،
									زبان یا ابزار.
								</p>
							</div>
						</section>
						<section class="py-4 bg-black bg-opacity-10 rounded-b-xl">
							<div class="container">
								<ul class="justify-center mx-auto leading-loose text-center md:flex" style="max-width: 800px;">
									<li class="relative inline-block mx-4 lg:mx-8">
										<router-link
											to="/browse/all"
											class="text-xs text-white opacity-50 taxonomy-nav-link hover:opacity-100 hover:text-white font-IranSans"
											>تمامی موضوعات</router-link
										>
									</li>
									<li class="relative inline-block mx-4 lg:mx-8">
										<router-link to="/browse/frameworks" class="text-xs text-white opacity-50 taxonomy-nav-link hover:opacity-100 font-IranSans"
											>فریمورک ها</router-link
										>
									</li>
									<li class="relative inline-block mx-4 lg:mx-8">
										<router-link
											to="/browse/testing"
											class="text-xs text-white opacity-50 taxonomy-nav-link hover:opacity-100 hover:text-white font-IranSans"
											>تست</router-link
										>
									</li>
									<li class="relative inline-block mx-4 lg:mx-8">
										<router-link
											to="/browse/languages"
											class="text-xs text-white opacity-50 taxonomy-nav-link hover:opacity-100 hover:text-white font-IranSans"
											>زبان ها</router-link
										>
									</li>
									<li class="relative inline-block mx-4 lg:mx-8">
										<router-link
											to="/browse/tooling"
											class="text-xs text-white opacity-50 taxonomy-nav-link hover:opacity-100 hover:text-white font-IranSans"
											>ابزار ها</router-link
										>
									</li>
									<li class="relative inline-block mx-4 lg:mx-8">
										<router-link
											to="/browse/techniques"
											class="text-xs text-white opacity-50 taxonomy-nav-link hover:opacity-100 hover:text-white font-IranSans"
											>تکنیک ها</router-link
										>
									</li>
								</ul>
							</div>
						</section>
					</div>
					<router-view v-slot="{ Component }">
						<transition name="fade" mode="out-in">
							<component :is="Component" />
						</transition>
					</router-view>
				</div>
			</section>
		</main>
	</div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.2s ease-in-out;
}

.fade-leave-to,
.fade-enter-from {
	opacity: 0;
}

.taxonomy-nav-link.router-exact-active::after,
.taxonomy-nav-link.router-exact-active,
.taxonomy-nav-link:hover::after {
	opacity: 1;
}

@media (min-width: 768px) {
	.banner.is-topic:before {
		background: url("../assets/images/topics/banner-bg-left.svg") no-repeat 0 100%, url("../assets/images/topics/banner-bg-right.svg") no-repeat 100% 100%;
		bottom: 0;
		content: "";
		display: block;
		left: 0;
		mix-blend-mode: luminosity;
		position: absolute;
		right: 0;
		top: 0;
	}
}

@media (min-width: 992px) {
	.taxonomy-nav-link::after {
		background: #fff;
		border-radius: 0.9rem;
		bottom: -15px;
		content: "";
		height: 4px;
		left: -10%;
		opacity: 0;
		pointer-events: none;
		position: absolute;
		transition: opacity 0.3s;
		width: 120%;
	}
}
</style>

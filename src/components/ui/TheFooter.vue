<template>
	<div class="footer-wrap mobile:text-lg">
		<img
			src="../../assets/images/footer-gang.svg"
			alt="Laracasts robot mascots"
			class="absolute top-0 hidden lg:inline-block footer-img"
			style="left: -200px; transform: scaleX(-1);"
		/>
		<section class="pt-0 lg:pb-0 footer-section top">
			<div class="container">
				<div class="mx-auto text-center lg:w-1/2 md:w-4/5">
					<div>
						<h2 class="mb-8 text-2xl font-light tracking-tight text-white md:text-3xl font-IranSans">می خوای عضو خبرنامه لاراکست بشی؟</h2>
					</div>
					<div>
						<form @submit.prevent id="newsletter-form">
							<div class="flex flex-col justify-center max-w-sm mx-auto mb-6 md:flex-row lg:max-w-full lg:mx-0 lg:mb-0 ">
								<input
									type="email"
									class="px-4 py-4 mb-4 text-base text-center text-black outline-none md:w-1/2 md:py-3 md:mb-0 md:-ml-8 md:text-sm md:text-right text-opacity-60 md:rounded-2xl rounded-2xl font-IranSans"
									name="email"
									placeholder="ایمیل خود را وارد کنید"
									autocomplete="off"
									required
								/>
								<button
									type="submit"
									class="z-10 max-w-full px-8 py-4 text-base transition-all duration-200 md:text-sm md:w-32 md:py-3 form-button md:rounded-2xl rounded-2xl font-IranSans"
								>
									عضویت
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
		<section class="py-0 text-center lg:text-right footer-section bottom">
			<footer class="container">
				<div class="lg:flex lg:mb-3">
					<div class="mb-10 lg:w-2/5 lg:mb-0 lg:ml-auto">
						<div class="flex justify-center mb-3 lg:block">
							<svg class="text-white fill-current" width="232" height="44" viewBox="0 0 323 36">
								<g fill="none" fill-rule="evenodd">
									<path
										d="M0 4.83h6.986v24.521h15.137v5.699H0V4.83zm53.374 23.744H39.36l-2.674 6.476h-7.159L42.981 4.83h6.9L63.38 35.05h-7.33l-2.675-6.476zm-2.199-5.31l-4.787-11.57-4.787 11.57h9.574zM92.949 35.05l-5.822-8.418H80.7v8.418h-6.986V4.83h13.067c2.674 0 4.995.446 6.965 1.339 1.969.892 3.485 2.158 4.55 3.799 1.063 1.64 1.595 3.583 1.595 5.828s-.54 4.18-1.617 5.806c-1.078 1.626-2.61 2.871-4.593 3.734l6.77 9.714H92.95zm-.13-19.254c0-1.698-.546-3-1.638-3.907-1.093-.907-2.688-1.36-4.787-1.36H80.7v10.534h5.693c2.099 0 3.694-.461 4.787-1.382 1.092-.92 1.638-2.216 1.638-3.885zm39.661 12.778h-14.016l-2.673 6.476h-7.16l13.456-30.22h6.9l13.498 30.22h-7.331l-2.674-6.476zm-2.2-5.31l-4.786-11.57-4.787 11.57h9.574zm36.556 12.304c-3.076 0-5.858-.67-8.344-2.008-2.487-1.338-4.442-3.194-5.865-5.569-1.424-2.374-2.135-5.058-2.135-8.05 0-2.994.711-5.678 2.135-8.052 1.423-2.375 3.378-4.231 5.865-5.57 2.486-1.338 5.282-2.007 8.387-2.007 2.617 0 4.981.46 7.094 1.382 2.114.92 3.889 2.245 5.326 3.971l-4.485 4.145c-2.04-2.36-4.57-3.54-7.59-3.54-1.868 0-3.536.41-5.002 1.23a8.742 8.742 0 0 0-3.429 3.432c-.819 1.468-1.229 3.137-1.229 5.008 0 1.87.41 3.54 1.23 5.008a8.742 8.742 0 0 0 3.428 3.432c1.466.82 3.134 1.23 5.002 1.23 3.02 0 5.55-1.194 7.59-3.583l4.485 4.145c-1.437 1.755-3.22 3.093-5.347 4.014-2.128.921-4.5 1.382-7.116 1.382zm73.888 0c-2.387 0-4.694-.324-6.922-.971-2.228-.648-4.018-1.49-5.369-2.526l2.372-5.267c1.294.95 2.832 1.713 4.614 2.288 1.783.576 3.565.864 5.348.864 1.984 0 3.45-.295 4.399-.885.948-.59 1.423-1.375 1.423-2.353 0-.72-.28-1.317-.841-1.792-.56-.475-1.28-.856-2.156-1.144-.877-.288-2.063-.604-3.558-.95-2.3-.546-4.183-1.093-5.65-1.64a9.178 9.178 0 0 1-3.773-2.633c-1.05-1.21-1.574-2.82-1.574-4.836 0-1.755.474-3.345 1.423-4.77.949-1.425 2.38-2.554 4.29-3.389 1.913-.834 4.249-1.252 7.009-1.252 1.926 0 3.81.23 5.65.691 1.84.46 3.45 1.122 4.83 1.986l-2.157 5.31c-2.789-1.583-5.578-2.375-8.366-2.375-1.955 0-3.4.317-4.334.95-.935.633-1.402 1.468-1.402 2.504s.54 1.806 1.617 2.31c1.078.503 2.724 1 4.938 1.49 2.3.546 4.183 1.093 5.65 1.64a9.355 9.355 0 0 1 3.773 2.59c1.05 1.18 1.574 2.777 1.574 4.792a8.258 8.258 0 0 1-1.445 4.727c-.963 1.425-2.408 2.554-4.334 3.389-1.926.835-4.27 1.252-7.03 1.252zm30.604-25.04h-9.66V4.83h26.306v5.699h-9.66v24.52h-6.986V10.53zm37.289 25.04c-2.386 0-4.694-.324-6.922-.971-2.228-.648-4.017-1.49-5.369-2.526l2.372-5.267c1.294.95 2.832 1.713 4.615 2.288 1.782.576 3.564.864 5.347.864 1.984 0 3.45-.295 4.399-.885.949-.59 1.423-1.375 1.423-2.353 0-.72-.28-1.317-.841-1.792-.56-.475-1.28-.856-2.156-1.144-.877-.288-2.063-.604-3.558-.95-2.3-.546-4.183-1.093-5.65-1.64a9.178 9.178 0 0 1-3.773-2.633c-1.05-1.21-1.574-2.82-1.574-4.836 0-1.755.474-3.345 1.423-4.77.949-1.425 2.38-2.554 4.291-3.389 1.912-.834 4.248-1.252 7.008-1.252 1.926 0 3.81.23 5.65.691 1.84.46 3.45 1.122 4.83 1.986l-2.157 5.31c-2.789-1.583-5.577-2.375-8.366-2.375-1.955 0-3.4.317-4.334.95-.935.633-1.402 1.468-1.402 2.504s.54 1.806 1.617 2.31c1.078.503 2.724 1 4.938 1.49 2.3.546 4.183 1.093 5.65 1.64a9.355 9.355 0 0 1 3.773 2.59c1.05 1.18 1.574 2.777 1.574 4.792a8.258 8.258 0 0 1-1.445 4.727c-.963 1.425-2.407 2.554-4.334 3.389-1.926.835-4.27 1.252-7.03 1.252z"
										fill="#FFF"
										fill-rule="nonzero"
									></path>
									<g fill="#FFF">
										<path
											d="M192.912 8.921l4.923 4.924a2.597 2.597 0 0 1-3.673 3.673l-4.923-4.924a2.597 2.597 0 1 1 3.673-3.673zM203.437 19.447l10.547 10.547a2.597 2.597 0 0 1-3.673 3.673L199.764 23.12a2.597 2.597 0 1 1 3.673-3.673z"
										></path>
										<path
											d="M190.416 8.255L218.753.893A2.672 2.672 0 0 1 222 2.767a2.592 2.592 0 0 1-1.846 3.199l-28.338 7.362a2.672 2.672 0 0 1-3.247-1.875 2.592 2.592 0 0 1 1.847-3.198z"
										></path>
										<path
											d="M209.592 31.104l7.363-28.337A2.592 2.592 0 0 1 220.153.92a2.672 2.672 0 0 1 1.875 3.247l-7.362 28.337a2.592 2.592 0 0 1-3.199 1.847 2.672 2.672 0 0 1-1.875-3.247z"
										></path>
									</g>
									<path
										d="M208.62 18.067l-10.236 10.235a2.643 2.643 0 1 1-3.738-3.738l10.236-10.235a2.643 2.643 0 0 1 3.738 3.738zM193.38 33.306l-1.54 1.54a2.643 2.643 0 1 1-3.738-3.738l1.54-1.54a2.643 2.643 0 0 1 3.738 3.738z"
										fill="#53B5FF"
									></path>
								</g>
							</svg>
						</div>
						<p class="max-w-sm mx-auto mb-8 leading-loose text-white lg:mx-0 lg:max-w-full font-IranSans">
							9 تا از 10 برنامه نویس لاراکست را به سایت های مشابه ترجیه میدهند. خودت بیا و ببین و مهارت های برنامه نویسی خودتو ارتقا بده.
						</p>
						<div class="flex items-center justify-between mx-auto mb-8 lg:mx-0 w-42 lg:w-28">
							<a href="http://youtube.com" target="_blank">
								<svg viewBox="0 0 16 19" class="w-6 text-white transition-all duration-300 hover:text-black">
									<g class="fill-current" fill-rule="nonzero">
										<path
											d="M6.4 0H5.371l-.685 2.629L4 0H2.857c.229.686.457 1.257.686 1.943.343.914.571 1.714.571 2.171v2.743h1.029V4.114L6.4 0zm2.743 5.143V3.429c0-.572-.114-.915-.343-1.258-.229-.342-.571-.457-1.029-.457-.457 0-.8.229-1.028.572-.229.228-.343.571-.343 1.143v1.828c0 .572.114.914.343 1.143.228.343.571.457 1.028.457.458 0 .8-.228 1.029-.571.229-.115.343-.572.343-1.143zm-.914.228c0 .458-.115.686-.458.686-.342 0-.457-.228-.457-.686V3.2c0-.457.115-.686.457-.686.343 0 .458.229.458.686v2.171zm4.342 1.486V1.714h-.914V5.6c-.228.343-.343.457-.571.457a.246.246 0 0 1-.229-.228V1.714h-.914v4c0 .343 0 .572.114.8 0 .229.229.343.572.343.342 0 .685-.228 1.028-.571v.571h.914zM13.029 12c-.343 0-.458.229-.458.686v.457h.915v-.457c0-.457-.115-.686-.457-.686zM9.714 12c-.114 0-.343.114-.457.229v3.085c.114.115.343.229.457.229.229 0 .343-.229.343-.686v-2.171c0-.457-.114-.686-.343-.686z"
										></path>
										<path
											d="M15.314 9.486C15.086 8.686 14.4 8 13.714 8 11.886 7.771 9.943 7.771 8 7.771c-1.943 0-3.771 0-5.714.229-.686 0-1.372.686-1.6 1.486-.229 1.143-.229 2.4-.229 3.543 0 1.142 0 2.4.229 3.542.228.8.8 1.372 1.6 1.486 1.943.229 3.771.229 5.714.229 1.943 0 3.771 0 5.714-.229.8-.114 1.486-.686 1.6-1.486.229-1.142.229-2.4.229-3.542 0-1.143 0-2.4-.229-3.543zM4.8 10.514H3.657v5.829H2.63v-5.829H1.6V9.486h3.2v1.028zm2.743 5.829h-.914v-.572c-.343.458-.686.572-1.029.572-.343 0-.457-.114-.571-.343 0-.114-.115-.343-.115-.8v-4h.915v4c0 .114.114.229.228.229.229 0 .343-.115.572-.458V11.2h.914v5.143zm3.428-1.6c0 .457 0 .8-.114 1.028-.114.343-.343.572-.686.572-.342 0-.685-.229-.914-.572v.458h-.914V9.486h.914v2.171c.343-.343.572-.571.914-.571.343 0 .572.228.686.571.114.229.114.572.114 1.029v2.057zm3.429-.8h-1.829v.914c0 .457.115.686.458.686.228 0 .342-.114.457-.343v-.571h.914V15.314c0 .229-.114.343-.229.572-.228.343-.571.571-1.142.571-.458 0-.8-.228-1.143-.571-.229-.229-.343-.686-.343-1.143v-1.714c0-.572.114-.915.228-1.143.229-.343.572-.572 1.143-.572.457 0 .8.229 1.029.572.228.228.228.685.228 1.143v.914h.229z"
										></path>
									</g>
								</svg>
							</a>
							<a href="http://twitter.com" target="_blank">
								<svg class="w-6 text-white transition-all duration-300 hover:text-black" viewBox="0 0 18 18">
									<path
										class="fill-current"
										fill-rule="nonzero"
										d="M9 0C4.037 0 0 4.037 0 9c0 4.962 4.037 9 9 9 4.962 0 9-4.038 9-9 0-4.963-4.037-9-9-9zm4.015 6.94c.004.09.006.18.006.27 0 2.737-2.083 5.892-5.894 5.892a5.86 5.86 0 0 1-3.175-.93 4.158 4.158 0 0 0 3.067-.858 2.074 2.074 0 0 1-1.936-1.439 2.088 2.088 0 0 0 .936-.034 2.072 2.072 0 0 1-1.662-2.032v-.026c.28.155.6.249.938.26a2.07 2.07 0 0 1-.64-2.766 5.882 5.882 0 0 0 4.269 2.165 2.071 2.071 0 0 1 3.53-1.89 4.135 4.135 0 0 0 1.316-.503 2.08 2.08 0 0 1-.912 1.146c.419-.05.82-.16 1.19-.326-.277.415-.628.78-1.033 1.071z"
									></path>
								</svg>
							</a>
							<a href="http://github.com" target="_blank">
								<svg viewBox="0 0 30 29" class="w-6 text-white transition-all duration-300 hover:text-black">
									<path
										class="fill-current"
										fill-rule="nonzero"
										d="M27.959 7.434a14.866 14.866 0 0 0-5.453-5.414C20.21.69 17.703.025 14.984.025c-2.718 0-5.226.665-7.521 1.995A14.864 14.864 0 0 0 2.01 7.434C.67 9.714 0 12.202 0 14.901c0 3.242.953 6.156 2.858 8.746 1.906 2.589 4.367 4.38 7.385 5.375.351.064.611.019.78-.136a.755.755 0 0 0 .254-.58l-.01-1.047c-.007-.658-.01-1.233-.01-1.723l-.448.077a5.765 5.765 0 0 1-1.083.068 8.308 8.308 0 0 1-1.356-.136 3.04 3.04 0 0 1-1.308-.58c-.403-.304-.689-.701-.858-1.192l-.195-.445a4.834 4.834 0 0 0-.614-.988c-.28-.362-.563-.607-.85-.736l-.136-.097a1.428 1.428 0 0 1-.253-.233 1.062 1.062 0 0 1-.176-.271c-.039-.09-.007-.165.098-.223.104-.059.292-.087.566-.087l.39.058c.26.052.582.206.965.465.384.258.7.594.947 1.007.299.53.66.933 1.082 1.21.423.278.85.417 1.278.417.43 0 .8-.032 1.112-.097a3.9 3.9 0 0 0 .878-.29c.117-.866.436-1.53.956-1.996a13.447 13.447 0 0 1-2-.348 7.995 7.995 0 0 1-1.833-.756 5.244 5.244 0 0 1-1.571-1.298c-.416-.516-.758-1.195-1.024-2.034-.267-.84-.4-1.808-.4-2.905 0-1.563.514-2.893 1.541-3.99-.481-1.176-.436-2.493.137-3.952.377-.116.936-.03 1.678.261.741.291 1.284.54 1.629.746.345.207.621.381.83.523a13.948 13.948 0 0 1 3.745-.503c1.288 0 2.537.168 3.747.503l.741-.464c.507-.31 1.106-.595 1.795-.853.69-.258 1.216-.33 1.58-.213.586 1.46.638 2.777.156 3.951 1.028 1.098 1.542 2.428 1.542 3.99 0 1.099-.134 2.07-.4 2.916-.267.846-.611 1.524-1.034 2.034-.423.51-.95.94-1.58 1.288a8.01 8.01 0 0 1-1.834.756c-.592.155-1.259.271-2 .349.676.58 1.014 1.498 1.014 2.75v4.087c0 .232.081.426.244.58.163.155.42.2.77.136 3.019-.994 5.48-2.786 7.386-5.375 1.905-2.59 2.858-5.504 2.858-8.746 0-2.698-.671-5.187-2.01-7.466z"
									></path>
								</svg>
							</a>
						</div>
					</div>
					<div class="mobile:mb-6 lg:w-1/6">
						<h5 class="mb-2 font-bold text-white lg:mb-6 lg:font-normal font-IranSans">آموزش</h5>
						<ul class="w-3/4 mx-auto mb-8 leading-relaxed lg:mx-0 lg:mb-0 inline-bulleted-list">
							<li>
								<a class="text-white transition-all opacity-50 cursor-pointer font-IranSans hover:opacity-100" @click="openJoinModal">ثبت نام</a>
							</li>
							<li>
								<a class="text-white transition-all opacity-50 cursor-pointer font-IranSans hover:opacity-100" @click="openLoginModal">ورود</a>
							</li>
							<li>
								<router-link to="/series" class="text-white transition-all opacity-50 font-IranSans hover:opacity-100">دوره ها</router-link>
							</li>
							<li>
								<router-link to="/bits" class="text-white transition-all opacity-50 font-IranSans hover:opacity-100">لارابیت ها</router-link>
							</li>
							<li>
								<router-link to="/browse" class="text-white transition-all opacity-50 font-IranSans hover:opacity-100">تاپیک ها</router-link>
							</li>
							<li>
								<router-link to="/week-in-review" class="text-white transition-all opacity-50 font-IranSans hover:opacity-100">اخبار جدید</router-link>
							</li>
							<li>
								<router-link to="/search" class="text-white transition-all opacity-50 font-IranSans hover:opacity-100">جستجو</router-link>
							</li>
							<li>
								<router-link to="/commercial" class="text-white transition-all opacity-50 font-IranSans hover:opacity-100">تبلیغات</router-link>
							</li>
						</ul>
					</div>
					<div class="mobile:mb-6 lg:w-1/6">
						<h5 class="mb-2 font-bold text-white lg:font-normal lg:mb-6 font-IranSans">گفتگو</h5>
						<ul class="w-3/4 mx-auto mb-8 leading-relaxed lg:mx-0 lg:mb-0 inline-bulleted-list">
							<li>
								<router-link to="/discuss" class="text-white transition-all opacity-50 font-IranSans hover:opacity-100">انجمن</router-link>
							</li>
							<li>
								<router-link to="/podcast" class="text-white transition-all opacity-50 font-IranSans hover:opacity-100">پادکست</router-link>
							</li>
							<li>
								<router-link to="/blog" class="text-white transition-all opacity-50 font-IranSans hover:opacity-100">بلاگ</router-link>
							</li>
							<li>
								<a @click="openSupportModal" class="text-white transition-all opacity-50 cursor-pointer font-IranSans hover:opacity-100">پشتیبانی</a>
							</li>
						</ul>
					</div>
					<div class="mobile:mb-8 lg:w-1/6">
						<h5 class="mb-2 font-bold text-white lg:font-normal lg:mb-6 font-IranSans">دیگر</h5>
						<ul class="w-3/4 mx-auto mb-8 leading-relaxed lg:mx-0 lg:mb-0 inline-bulleted-list">
							<li>
								<router-link to="/gift-certificate" class="text-white transition-all opacity-50 font-IranSans hover:opacity-100">کارت هدیه</router-link>
							</li>
							<li>
								<router-link to="/teams" class="text-white transition-all opacity-50 font-IranSans hover:opacity-100">تیم ها</router-link>
							</li>
							<li>
								<router-link to="/faq" class="text-white transition-all opacity-50 font-IranSans hover:opacity-100">سوال های پرتکرار</router-link>
							</li>
							<li>
								<router-link to="/assets" class="text-white transition-all opacity-50 font-IranSans hover:opacity-100">فایل ها</router-link>
							</li>
							<li>
								<router-link to="/larajob" class="text-white transition-all opacity-50 font-IranSans hover:opacity-100">موقعیت شغلی</router-link>
							</li>
							<li>
								<router-link to="/privacy" class="text-white transition-all opacity-50 font-IranSans hover:opacity-100">حریم خصوصی</router-link>
							</li>
							<li>
								<router-link to="/terms" class="text-white transition-all opacity-50 font-IranSans hover:opacity-100">شرایط</router-link>
							</li>
						</ul>
					</div>
				</div>
				<div class="py-4 border-t border-white border-solid mobile:text-lg lg:mt-8 border-opacity-10">
					<div class="text-sm text-center font-IranSans">
						<p class="tracking-normal text-white opacity-50 lg:mb-2">© تمامی شرایط محفوظ و متعلق به لاراکست می باشد.</p>
						<p class="hidden tracking-normal md:block"></p>
					</div>
				</div>
			</footer>
		</section>
	</div>
	<support-modal></support-modal>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { useStore } from "vuex";

const SupportModal = defineAsyncComponent(() => import("./modals/SupportModal.vue"));

export default {
	components: {
		SupportModal,
	},
	setup() {
		const store = useStore();

		const openJoinModal = () => store.dispatch("modals/openJoin");
		const openLoginModal = () => store.dispatch("modals/openLogin");
		const openSupportModal = () => store.dispatch("modals/openSupport");

		return {
			openJoinModal,
			openLoginModal,
			openSupportModal,
		};
	},
};
</script>

<style scoped>
.footer-wrap {
	background-image: radial-gradient(circle at 1% 1%, #328bf2, #1644ad);
	background-position: 50%;
	background-repeat: no-repeat;
	background-size: auto;
	overflow: hidden;
	position: relative;
}

.footer-wrap .footer-section.top .container {
	background: url("../../assets/images/mic-drop.svg") no-repeat 0 0;
	background-size: 80px;
	padding-top: 4em;
}

.footer-img {
	opacity: 1;
	transition: opacity 1s ease;
}

.form-button {
	--border-opacity: 1;
	--bg-opacity: 1;
	--text-opacity: 1;
	background-color: rgba(50, 138, 241, var(--bg-opacity));
	border-color: rgba(50, 138, 241, var(--border-opacity));
	color: rgba(255, 255, 255, var(--text-opacity));
}

.form-button:hover {
	--tw-border-opacity: 1;
	--tw-bg-opacity: 1;
	--tw-text-opacity: 1;
	background-color: rgba(39, 121, 189, var(--tw-bg-opacity));
	border-color: rgba(50, 138, 241, var(--tw-border-opacity));
	box-shadow: 0 0 10px rgb(0 0 0 / 25%);
	color: rgba(255, 255, 255, var(--tw-text-opacity));
}

.footer-wrap .inline-bulleted-list > li {
	display: inline;
}

.footer-wrap .inline-bulleted-list > li:not(:first-child):before {
	color: hsla(0, 0%, 100%, 0.4);
	content: " \B7";
	font-size: 1.7rem;
	line-height: 1;
	margin-left: 2px;
	margin-right: 4px;
	vertical-align: sub;
}

@media (min-width: 992px) {
	.footer-wrap .footer-section.top .container {
		background: url("../../assets/images/mic-drop.svg") no-repeat 19% 0;
		background-size: 176px;
		padding-bottom: 80px;
		padding-top: 80px;
	}

	.footer-wrap .inline-bulleted-list > li {
		display: list-item;
	}

	.footer-wrap .inline-bulleted-list > li:not(:first-child):before {
		content: none;
	}
}
</style>

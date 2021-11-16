// SWIPER
var swiper = new Swiper(".card-slider-container", {
	spaceBetween: 25,
	slidesPerView: 1,
	breakpoints: {
		768: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 3,
		},
	},
	centeredSlides: false,
	grabCursor: true,
	pagination: {
		el: ".swiper-pagination",
		dynamicBullets: true,
	},
});

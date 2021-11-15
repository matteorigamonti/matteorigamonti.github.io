// SWIPER
var swiper = new Swiper(".card-slider-container", {
	spaceBetween: 25,
	breakpoints: {
		1024: {
			slidesPerView: 3,
		},
		768: {
			slidesPerView: 2,
		},
		425: {
			slidesPerView: 1,
		},
	},
	centeredSlides: false,
	grabCursor: true,
	pagination: {
		el: ".swiper-pagination",
		dynamicBullets: true,
	},
});

// Granim Init
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

if (prefersDarkScheme.matches) {
  var granimInstance = new Granim({
    element: "#canvas-basic",
    direction: "diagonal",
    isPausedWhenNotInView: false,
    transitionSpeed: 1000,
    states: {
      "default-state": {
        gradients: [
          ["#4834d4", "#0c0c0c"],
          ["#485461", "#28313b"],
          ["#000000", "#04619f"],
        ],
      },
    },
  });
} else {
  var granimInstance = new Granim({
    element: "#canvas-basic",
    direction: "diagonal",
    isPausedWhenNotInView: false,
    transitionSpeed: 1000,
    states: {
      "default-state": {
        gradients: [
          ["#4158D0", "#FFCC70"],
          ["#0093E9", "#80D0C7"],
          ["#FFE53B", "#FF2525"],
          ["#FEE140", "#FA709A"],
          ["#FEE140", "#FA709A"],
        ],
      },
    },
  });
}

// Smooth scroll anchor link
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Swiper Init
/* var swiper = new Swiper(".card-slider-container", {
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

	grabCursor: true,

	pagination: {
		el: ".swiper-pagination",
		dynamicBullets: true,
	},
}); */

// GRANIM
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

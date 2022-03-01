module.exports = {
	content: ["./src/**/*.{html,js}"],
	mode: "jit",
	theme: {
		extend: {
			backgroundImage: {
				"hero-pattern": "url('./day-night.gif')",
				"footer-texture": "url('/img/footer-texture.png')",
			},
			fontSize: {
				"10xl": "10rem",
			},
			width: {
				match: "20.313rem",
			},
		},
	},
	plugins: [],
}

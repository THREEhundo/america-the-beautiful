const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
	content: ["./index.html"],
	mode: "jit",
	theme: {
		extend: {
			backgroundImage: {
				"hero-pattern": "url('./day-night.gif')",
				"footer-texture": "url('/img/footer-texture.png')",
			},
			fontFamily: [
				"national_parkoutline",
				"national_parkthin",
				...defaultTheme.fontFamily.serif,
			],
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

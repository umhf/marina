/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {zIndex: {
			'lowest': '-1',
		  }
	},
		fontFamily: {
			'serif': ['Lora', 'ui-sans-serif'],
			'heading': ['Inspiration'],
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			white: colors.gray,
			colored: colors.violet
		  },
	},
	plugins: [require('@tailwindcss/forms'),plugin(function({ addBase, theme, addComponents }) {
		addBase({
		  'h2': { marginBottom: theme("margin.2"), marginTop: theme("margin.4") },
		  'h1': { fontSize: theme('fontSize.4xl'), fontFamily: theme("fontFamily.heading"), marginTop: theme("margin.16"), marginBottom: theme("margin.8")},
		  "html": { fontFamily: theme("fontFamily.serif"), color: theme("colors.white.800") }, 
		  "p": {marginBottom: theme("margin.1")}
		}),
		addComponents({
			".section": { "margin-top": theme("margin.8") },
			".legal h1": {fontSize: "24px", fontFamily: theme("fontFamily.serif")},
			".legal h2": {fontSize: "20px", fontFamily: theme("fontFamily.serif")}
		})
	  })],
}

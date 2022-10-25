/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {zIndex: {
			'lowest': '-1',
		  }},
		fontFamily: {
			'serif': ['Lora', 'ui-sans-serif'],
			'heading': ['Inspiration'],
			'normal': ['Inter']
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			white: colors.gray,
			colored: colors.green
		  },
	},
	plugins: [plugin(function({ addBase, theme, addComponents }) {
		addBase({
		  'h2': { fontSize: theme('fontSize.4xl'), fontFamily: theme("fontFamily.heading"), marginBottom: theme("margin.6") },
		  'h1': { fontSize: theme('fontSize.4xl') },
		  "html": { fontFamily: theme("fontFamily.normal") }, 
		  "p": {marginBottom: theme("margin.1")}
		}),
		addComponents({
			".bg-light": { backgroundColor: theme('colors.white.50') },
			".section": {"margin-top": theme("margin.8")}
		})
	  })],
}

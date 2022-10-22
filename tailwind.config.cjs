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
			'heading': ['Lora', 'ui-sans-serif'],
			'section': ['Inspiration', 'ui-sans']
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			gray: colors.gray,
			orange: colors.orange
		  },
	},
	plugins: [plugin(function({ addBase, theme, addComponents }) {
		addBase({
		  'h1': { fontSize: theme('fontSize.4xl'), fontFamily: theme("fontFamily.section") },
		  'h2': { fontSize: theme('fontSize.4xl') },
		  
		}),
		addComponents({
		  ".colored": {backgroundColor: theme('colors.orange.300')}
		})
	  })],
}

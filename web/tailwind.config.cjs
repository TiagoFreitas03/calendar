/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.tsx'
	],
	theme: {
		extend: {
			fontFamily: {
				sans: 'Roboto, sans-serif',
			},
			colors: {
				gray: {
					100: '#E1E1E6',
					300: '#8D8D99',
					500: '#323238',
					600: '#29292E',
					700: '#121214',
					900: '#09090A'
				},
			},
		},
	},
	plugins: [],
}

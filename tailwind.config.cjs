/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {},
	plugins: [
		require('daisyui'),
		// require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/typography'),
	],
	daisyui: {
		themes: [
			{
				'light': {
					...require('daisyui/src/colors/themes')['[data-theme=cmyk]'],
					'.toogle-text': {
						'color': 'black',
					},
					'.twitter': {
						'color': '#white',
						'background-color': '#1EA1F1',
					},
					'.github': {
						'color': '#white',
						'background-color': '#24292E',
					},
					'.linkedin': {
						'color': '#white',
						'background-color': '#0077B5',
					},
					'.instagram': {
						'color': '#white',
						'background-color': '#E4405F',
					},
					'.youtube': {
						'color': '#white',
						'background-color': '#FF0000',
					},
					'.facebook': {
						'color': '#white',
						'background-color': '#4267B2',
					},
					'.whatsapp': {
						'color': '#white',
						'background-color': '#25D366',
					},
					'.telegram': {
						'color': '#white',
						'background-color': '#0088CC',
					},
					'.twitch': {
						'color': '#white',
						'background-color': '#9146FF',
					},
					'.discord': {
						'color': '#white',
						'background-color': '#7289DA',
					},
					'.border-twitter': {
						'border': '1px solid #1EA1F1',
					},
					'.border-github': {
						'border': '1px solid #24292E',
					},
					'.border-linkedin': {
						'border': '1px solid #0077B5',
					},
					'.border-instagram': {
						'border': '1px solid #E4405F',
					},
					'.border-youtube': {
						'border': '1px solid #FF0000',
					},
				}
			},
			{
				night: {
					...require('daisyui/src/colors/themes')['[data-theme=night]'],
					'.toogle-text': {
						'color': '#fff'
					},
					'.border-twitter': {
						'border': 'none',
					},
					'.border-github': {
						'border': 'none',
					},
					'.border-linkedin': {
						'border': 'none',
					},
				}
			}
		],
		darkTheme: 'night',
		lightTheme: 'light',
	},
	darkMode: 'class',
}

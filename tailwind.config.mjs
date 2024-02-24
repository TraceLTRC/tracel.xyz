/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'text': '#180c0c',
			'background': '#faf3f4',
			'primary': '#c84c54',
			'secondary': '#e28389',
			'accent': '#e35861',
		},
		extend: {
			fontFamily: {
				inter: ["Inter", "sans-serif"]
			}
		},
	},
	plugins: [
    require("@tailwindcss/typography")
  ],
}

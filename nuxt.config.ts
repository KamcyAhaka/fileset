// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-11-01",
	devtools: { enabled: true },
	modules: ["@nuxt/fonts", "@nuxtjs/tailwindcss", "@pinia/nuxt", "@nuxt/eslint"],

	runtimeConfig: {
		app: {
			unsplashAccessKey: process.env.NUXT_UNSPLASH_ACCESS_KEY,
			unsplashSecretKey: process.env.NUXT_UNSPLASH_SECRET_KEY,
			pexelsApiKey: process.env.NUXT_PEXELS_API_KEY,
		},
	},
});

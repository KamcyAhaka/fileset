import { createApi } from "unsplash-js";

export default defineEventHandler(async (_) => {
	console.log(process.env.NUXT_UNSPLASH_ACCESS_KEY);

	const unsplashApi = createApi({
		accessKey: process.env.NUXT_UNSPLASH_ACCESS_KEY as string,
	});

	if (unsplashApi) {
		return true;
	} else return false;
});

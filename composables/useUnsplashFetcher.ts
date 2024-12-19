import { createApi } from "unsplash-js";
import type UnsplashPhotoResource from "~/types/UnsplashPhotoResource";

export default function () {
	const runtimeConfig = useRuntimeConfig();

	const fetchUnsplashImages = async (searchTerm: string, photoAmount?: number) => {
		const unsplash = createApi({
			accessKey: runtimeConfig.app.unsplashAccessKey,
		});

		const photos = await unsplash.search.getPhotos({
			query: searchTerm,
			page: 1,
			perPage: photoAmount || 3,
			color: "green",
			orientation: "portrait",
		});
		return photos.response?.results as UnsplashPhotoResource[];
	};

	return { fetchUnsplashImages };
}

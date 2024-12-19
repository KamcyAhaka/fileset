import { createClient, type ErrorResponse } from "pexels";
import type PexelPhotoResource from "~/types/PexelPhotoResource";

export default function () {
	const runtimeConfig = useRuntimeConfig();

	const client = createClient(runtimeConfig.app.pexelsApiKey);

	const fetchPexelImages = async (query: string, photoAmount?: number) => {
		try {
			const response = await client.photos.search({ query, per_page: photoAmount || 3 });
			if ("error" in response) {
				console.error(response.error);
				return [];
			} else {
				return response.photos as PexelPhotoResource[];
			}
		} catch (error) {
			const err = error as ErrorResponse;
			console.error(err);
		}
	};

	return {
		fetchPexelImages,
	};
}

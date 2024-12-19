import type PexelPhotoResource from "~/types/PexelPhotoResource";
import type UnsplashPhotoResource from "~/types/UnsplashPhotoResource";

export default function () {
	// Mapping for Unsplash
	const mapUnsplash = (img: UnsplashPhotoResource) => ({
		id: img.id,
		url: img.urls.small,
		source: "Unsplash",
		isAI: false,
		photographer: img.user.name,
		photographerUrl: img.user.links.html,
		photographerProfileImage: img.user.profile_image.small,
		photographerId: img.user.id,
		photoUrl: img.links.html,
		downloadUrl: img.links.download,
		description: img.alt_description || img.description,
		likes: img.likes,
		likedByUser: img.liked_by_user,
		tags: img.breadcrumbs, // Add breadcrumbs/tags if available
	});

	// Mapping for Pexels
	const mapPexels = (img: PexelPhotoResource) => ({
		id: img.id,
		url: img.src.medium,
		source: "Pexels",
		isAI: false,
		photographer: img.photographer,
		photographerUrl: img.photographer_url,
		photographerId: img.photographer_id,
		photoUrl: `https://www.pexels.com/photo/${img.id}`,
		downloadUrl: img.src.original, // Assuming the original image is available for download
		description: img.alt,
		likes: img.liked ? 1 : 0, // Pexels doesn't give likes count directly
		likedByUser: img.liked,
		tags: [], // Pexels doesn't have breadcrumbs, you can add other tags if available
	});

	// Mapping for AI-generated images
	const mapAI = (img: unknown) => ({
		// @ts-expect-error - we are using an unknown type
		id: img.id,
		// @ts-expect-error - we are using an unknown type
		url: img.url,
		source: "AI",
		isAI: true,
		photographer: "AI Generated", // AI doesn't have a photographer
		photographerUrl: "", // No URL for AI-generated images
		photographerProfileImage: "", // No profile image
		photographerId: "", // No ID for AI
		photoUrl: "", // AI photos might not have a direct link
		// @ts-expect-error - we are using an unknown type
		downloadUrl: img.url, // Assuming the AI image URL is also the download link
		// @ts-expect-error - we are using an unknown type
		description: img.description || "AI Generated Image",
		likes: 0, // Assuming AI images don’t have likes
		likedByUser: false, // Assuming AI images don’t have likes
		tags: [], // Add relevant tags if available from the AI service
	});

	return {
		mapUnsplash,
		mapPexels,
		mapAI,
	};
}

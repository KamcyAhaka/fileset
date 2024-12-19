type AppImage = {
	id: string | number;
	url: string;
	source: "Unsplash" | "Pexels" | "AI";
	isAI: boolean;
	photographer: string;
	photographerUrl: string;
	photographerId: string;
	photoUrl: string;
	downloadUrl: string; // Assuming the original image is available for download
	description: string;
	likes: number; // Pexels doesn't give likes count directly
	likedByUser: boolean;
	tags: string[];
};

export default AppImage;

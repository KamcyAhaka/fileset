type UnsplashPhotoResource = {
	id: string;
	slug: string;
	alternative_slugs: { [key: string]: string }; // Mapping for slugs in different languages
	created_at: string;
	updated_at: string;
	promoted_at: string | null; // Can be null if not promoted
	width: number;
	height: number;
	color: string;
	blur_hash: string;
	description: string; // Nullable since description might be absent
	alt_description: string; // Added based on the provided data
	breadcrumbs: string[]; // Added to account for breadcrumb info
	urls: {
		raw: string;
		full: string;
		regular: string;
		small: string;
		thumb: string;
		small_s3: string; // New field for small s3 storage URL
	};
	links: {
		self: string;
		html: string;
		download: string;
		download_location: string; // Added field for download location
	};
	likes: number;
	liked_by_user: boolean;
	current_user_collections: UserCollection[]; // Can be typed more specifically if needed
	sponsorship: unknown | null; // Can be null if no sponsorship
	topic_submissions: { [key: string]: unknown }; // Can be further specified if needed
	asset_type: string;
	user: {
		id: string;
		updated_at: string;
		username: string;
		name: string;
		first_name: string;
		last_name: string;
		twitter_username: string | null; // Can be null if not provided
		portfolio_url: string | null; // Can be null if not provided
		bio: string;
		location: string;
		links: {
			self: string;
			html: string;
			photos: string;
			likes: string;
			portfolio: string;
			following: string;
			followers: string;
		};
		profile_image: {
			small: string;
			medium: string;
			large: string;
		};
		instagram_username: string | null; // Can be null if not provided
		total_collections: number;
		total_likes: number;
		total_photos: number;
		total_promoted_photos: number;
		total_illustrations: number;
		total_promoted_illustrations: number;
		accepted_tos: boolean;
		for_hire: boolean;
		social: {
			instagram_username: string | null;
			portfolio_url: string | null;
			twitter_username: string | null;
			paypal_email: string | null;
		};
	};
};

export type UserCollection = {
	id: 206;
	title: string;
	published_at: Date;
	last_collected_at: Date;
	updated_at: Date;
	cover_photo: string | null;
	user: string | null;
};

export type PhotosWithTotalResults = {
	total: number;
	total_pages: number;
	results: UnsplashPhotoResource[];
};

export default UnsplashPhotoResource;

type PexelPhotoResource = {
	id: number;
	width: number;
	height: number;
	url: string;
	photographer: string;
	photographer_url: string;
	photographer_id: string;
	avg_color: string;
	src: {
		original: string;
		large2x: string;
		large: string;
		medium: string;
		small: string;
		portrait: string;
		landscape: string;
		tiny: string;
	};
	liked: boolean;
	alt: string;
};

export default PexelPhotoResource;

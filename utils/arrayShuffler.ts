import type AppImage from "~/types/AppImage";

// Helper function to shuffle the array
export default function (array: Array<AppImage>): Array<AppImage> {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]]; // Swap elements
	}
	return array;
}

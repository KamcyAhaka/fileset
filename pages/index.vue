<script setup lang="ts">
import { useToastStore } from "~/components/sm-toast/SmToastStore";
import { reactive } from "vue";
import imageMapper from "~/utils/imageMapper";
import type AppImage from "~/types/AppImage";

const screenState = reactive({
	isLoading: false,
	searchTerm: "",
	loadingState: new DataLoadingState(),
});

const pictures = ref<Array<AppImage>>([]);

const toastStore = useToastStore();
const { fetchPexelImages } = usePexelsFetcher();
const { fetchUnsplashImages } = useUnsplashFetcher();
const { mapPexels, mapUnsplash } = imageMapper();

onMounted(async () => {
	// await fetchUnsplashImages("cat");
});

async function fetchImages() {
	if (screenState.searchTerm.length === 0) {
		toastStore.error("Please enter a search term");
	} else {
		pictures.value = [];
		screenState.isLoading = true;
		screenState.loadingState.setLoading();

		const [pexels, unsplash] = await Promise.all([
			fetchPexelImages(screenState.searchTerm),
			fetchUnsplashImages(screenState.searchTerm),
		]);

		const images = [...unsplash!.map(mapUnsplash), ...pexels!.map(mapPexels)];

		// Shuffle the images array to randomize order
		const shuffledImages = arrayShuffler(images);

		console.log(shuffledImages);

		pictures.value = shuffledImages;
		screenState.isLoading = false;
		screenState.loadingState.setContent();
	}
}
</script>

<template>
	<div>
		<header class="header">
			<nav class="nav">
				<a href="/">Fileset</a>
			</nav>
		</header>
		<main>
			<header>
				<div
					class="search-container mx-auto my-5 flex max-w-[75%] items-center justify-between gap-6 rounded-full bg-gray-100 px-3 py-3"
				>
					<label for="search" class="w-full">
						<input
							id="search"
							v-model="screenState.searchTerm"
							type="search"
							class="w-full rounded-full px-3 py-2"
							name="search"
							placeholder="Search for an asset..."
						/>
					</label>
					<button
						class="w-1/6 rounded-full bg-purple-950 px-6 py-2.5 font-bold text-white"
						@click="fetchImages"
					>
						Search
					</button>
				</div>
			</header>

			<section v-if="screenState.isLoading">
				<div class="flex flex-wrap justify-center gap-6">
					<div class="skeleton-loader h-64 w-1/4 rounded-lg bg-gray-200 transition duration-500"></div>
					<div class="skeleton-loader h-64 w-1/4 rounded-lg bg-gray-200 transition duration-500"></div>
					<div class="skeleton-loader h-64 w-1/4 rounded-lg bg-gray-200 transition duration-500"></div>
				</div>
			</section>

			<!-- <section v-if="!screenState.isLoading && screenState.loadingState.isContent()"> -->
			<section v-if="true">
				<div class="flex flex-wrap justify-center gap-6 px-10">
					<div v-for="image in pictures" :key="image.id">
						<div class="img-result aspect-square w-full max-w-72 rounded-lg">
							<img
								:src="image.url"
								:alt="image.description"
								class="h-full w-full rounded-lg object-cover"
							/>
							<div
								class="img-info-container absolute inset-0 z-[2] flex h-full w-full translate-y-full flex-col items-center justify-center gap-3 bg-black/70 text-white"
							>
								<img
									v-if="image.source === 'Unsplash'"
									src="~/assets/img/Unsplash_Logo_Full_Stacked.png"
									alt="Unsplash logo"
									class="w-20 invert"
								/>
								<img
									v-if="image.source === 'Pexels'"
									src="~/assets/img/Pexels_logo.png"
									alt="Unsplash logo"
									class="w-20"
								/>
								<p>
									Image by:
									<a :href="image.photographerUrl" class="font-bold underline">{{
										image.photographer
									}}</a>
								</p>
								<p>Go to image: <a :href="image.photoUrl" target="_blank">here</a></p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	</div>
</template>

<style lang="scss" scoped>
@keyframes pulse {
	0% {
		opacity: 0.5;
	}
	50% {
		opacity: 1;
	}
	100% {
		opacity: 0.5;
	}
}
.skeleton-loader {
	animation: pulse 2s infinite;
}
.header {
	@apply bg-purple-950 text-white;
	.nav {
		@apply container mx-auto p-4;
	}
}

.img-result {
	@apply relative isolate block overflow-hidden;

	&:hover .img-info-container {
		@apply translate-y-0;
		transition: transform 0.3s ease-in-out;
	}
}
</style>

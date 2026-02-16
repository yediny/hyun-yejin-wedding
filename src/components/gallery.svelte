<script lang="ts">
	import photo1 from '$lib/assets/gallery/1.webp';
	import photo2 from '$lib/assets/gallery/2.webp';
	import photo3 from '$lib/assets/gallery/3.webp';
	import photo4 from '$lib/assets/gallery/4.webp';
	import photo5 from '$lib/assets/gallery/5.webp';
	import photo6 from '$lib/assets/gallery/6.webp';
	import photo7 from '$lib/assets/gallery/7.webp';
	import photo8 from '$lib/assets/gallery/8.webp';

	import PhotoSwipeLightBox from 'photoswipe/lightbox';
	import PhotoSwipe from 'photoswipe';
	import 'photoswipe/style.css';
	import { onMount } from 'svelte';
	import { localeStore } from '../i18n.svelte';
	import { _ } from 'svelte-i18n';

	// Lightbox 최대 크기 제한
	const MAX_WIDTH = 1920;
	const MAX_HEIGHT = 1080;

	// 이미지 크기 조정 함수
	function resizePhoto(w: number, h: number, maxW: number, maxH: number) {
		const ratio = Math.min(maxW / w, maxH / h, 1); // 1보다 크면 그대로
		return { width: Math.round(w * ratio), height: Math.round(h * ratio) };
	}

	const photosOriginal = [
		{ src: photo1, width: 1280, height: 960 },
		{ src: photo2, width: 1496, height: 1496 },
		{ src: photo3, width: 1000, height: 750 },
		{ src: photo4, width: 3024, height: 4032 },
		{ src: photo5, width: 4284, height: 5712 },
		{ src: photo6, width: 4000, height: 3000 },
		{ src: photo7, width: 4032, height: 3024 },
		{ src: photo8, width: 1496, height: 1496 }
	];

	// Lightbox용 최대 크기 적용
	const photos = photosOriginal.map(p => {
		const { width, height } = resizePhoto(p.width, p.height, MAX_WIDTH, MAX_HEIGHT);
		return { src: p.src, width, height };
	});

	onMount(() => {
		const lightbox = new PhotoSwipeLightBox({
			gallery: '#gallery',
			children: 'a',
			showHideAnimationType: 'fade',
			pswpModule: PhotoSwipe,
			zoom: false,           // 클릭시 확대 애니메이션 X
			wheelToZoom: false,    // 마우스 휠 확대 X
			pinchToZoom: false,    // 모바일 핀치 줌 X
			doubleTapToZoom: false // 더블탭 확대 X
		});
		lightbox.init();
	});
</script>

<section class="gallery">
	<div class="header">
		<h2 class="title {localeStore.locale}">{$_('gallery.title')}</h2>
		<p class="sub-title {localeStore.locale}">{$_('gallery.sub_title')}</p>
	</div>
	<div id="gallery">
		{#each photos as photo}
			<a
				href={photo.src}
				class="slide"
				data-pswp-width={photo.width}
				data-pswp-height={photo.height}
				target="_blank"
			>
				<img class="thumbnail" src={photo.src} alt="" />
			</a>
		{/each}
	</div>
</section>

<style lang="scss">
section.gallery {
	padding: 4.5em 2em 2em 2em;
	background-color: $white;
}

.header {
	margin-bottom: 2em;
}

h2.title {
	text-align: center;
	color: $primary-color;
	&.en {
		font-size: 1.8rem;
		font-weight: 700;
		letter-spacing: 1px;
	}

	&.kr {
		font-size: 1.3rem;
		font-weight: 600;
		letter-spacing: 1px;
	}
}

p.sub-title {
	text-align: center;
	&.kr {
		margin-top: 0.9em;
		font-size: 0.9rem;
	}

	&.en {
		margin-top: 0.5em;
		font-size: 1.2rem;
	}
}

#gallery {
	display: grid;
	gap: 1em;
	grid-template-columns: repeat(2, 1fr);
	grid-auto-rows: auto; /* row 높이 자동 */
}

.slide {
	display: block;
	width: 100%;
}

img.thumbnail {
	border-radius: 4px;
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.slide:nth-child(1),
.slide:nth-child(2),
.slide:nth-child(3),
.slide:nth-child(5),
.slide:nth-child(7),
.slide:nth-child(8) {
	grid-row: span 2;
}
</style>

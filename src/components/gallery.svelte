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

	onMount(() => {
		const lightbox = new PhotoSwipeLightBox({
			gallery: '#gallery',
			children: 'a',
			showHideAnimationType: 'fade',
			pswpModule: PhotoSwipe
		});
		lightbox.init();
	});

	const photos = [
		{ src: photo1, width: 1200, height: 1800 },
		{ src: photo2, width: 1200, height: 1800 },
		{ src: photo3, width: 1200, height: 1800 },
		{ src: photo4, width: 2000, height: 1333 },
		{ src: photo5, width: 1200, height: 1800 },
		{ src: photo6, width: 2000, height: 1333 },
		{ src: photo7, width: 1200, height: 1800 },
		{ src: photo8, width: 1200, height: 1800 }
	];
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

/* gallery grid */
#gallery {
	display: grid;
	gap: 1em;
	grid-template-columns: repeat(2, 1fr);
	grid-auto-rows: auto; /* 높이를 자동으로 */
}

#gallery a {
	display: block;
	width: 100%;
	aspect-ratio: attr(data-pswp-width) / attr(data-pswp-height); /* CSS Level 4 지원 브라우저에서 원본 비율 유지 */
}

/* 썸네일만 cover */
#gallery img.thumbnail {
	border-radius: 4px;
	width: 100%;
	height: 100%;
	object-fit: cover;
}

/* 특정 슬라이드가 세로/가로 길게 늘어나는 건 이제 필요 없음, aspect-ratio로 자동 */
</style>
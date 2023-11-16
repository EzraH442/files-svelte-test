<script lang="ts">
	import { isHEIC, isImage, isVideo } from '$lib/util';
	import { onMount } from 'svelte';
	import { DocumentMagnifyingGlass, Icon } from 'svelte-hero-icons';
	import Loading from '$lib/components/Loading.svelte';
	import heic2any from 'heic2any';

	export let src: string;
	export let token: string;

	let url = '';

	onMount(async () => {
		console.log('on mount', url);
		if (isHEIC(src)) {
			try {
				console.log('tru fetch', url);
				const fetchResult = await fetch(`${src}?token=${token}`);
				const resultBlob = await fetchResult.blob();
				const mediaBlob = (await heic2any({ blob: resultBlob })) as Blob;
				url = URL.createObjectURL(mediaBlob);
				console.log('set url', url);
			} catch (e) {
				console.error(e);
			}
		}
	});
</script>

{#if isImage(src)}
	<img src={`${src}?token=${token}`} class={$$restProps.class} alt={src} />
{:else if isHEIC(src)}
	{#if url}
		<img src={url} class={$$restProps.class} alt={src} />
	{:else}
		<Loading />
	{/if}
{:else if isVideo(src)}
	<!-- svelte-ignore a11y-media-has-caption -->
	<video src={`${src}?token=${token}`} class={$$restProps.class} />
{:else}
	<div class={$$restProps.class}>
		<Icon src={DocumentMagnifyingGlass} />
	</div>
{/if}

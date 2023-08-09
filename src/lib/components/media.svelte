<script lang="ts">
	import { isImage, isVideo } from '$lib/util';

	export let src: string;
	export let token: string;
</script>

{#if isImage(src)}
	<img src={`${src}?token=${token}`} class={$$restProps.class} alt={src} />
{:else if isVideo(src)}
	<!-- svelte-ignore a11y-media-has-caption -->
	<video src={`${src}?token=${token}`} class={$$restProps.class} />
{:else}
	<img alt={src} src="" />
{/if}

<script lang="ts">
	import { Icon, XCircle } from 'svelte-hero-icons';
	import type { mFile } from '../../stores';
	import Media from './media.svelte';

	export let files: mFile[];
	export let token: string;

	export let fullscreenOpen = false;
	export let currentFullscreenFileSrc = '';

	export let onImageClick = (src: string) => {
		fullscreenOpen = true;
		currentFullscreenFileSrc = src;
	};

	export let onImageClose = () => {
		fullscreenOpen = false;
		currentFullscreenFileSrc = '';
	};
</script>

<div class="h-screen flex flex-wrap content-start">
	{#each files as file}
		{#if file.id != null}
			<div class="tooltip">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div
					class="z-50"
					on:click={() =>
						onImageClick(`https://static.ezrahuang.com/file/ezrah442-testing/${file.path}`)}
				>
					<Media
						src={`https://static.ezrahuang.com/file/ezrah442-testing/${file.path}`}
						class="h-32 w-auto m-1"
						{token}
					/>
				</div>
				<span>
					{file.path}
				</span>
			</div>
		{/if}
	{/each}
	<div hidden={!fullscreenOpen} class="absolute top-0 left-0 w-full bg-gray-600 bg-opacity-90 z-50">
		{#if currentFullscreenFileSrc != ''}
			<div class="m-4 text-white">
				<div class="flex items-center">
					<span class="underline">{currentFullscreenFileSrc}</span>
					<button on:click={onImageClose} class="ml-auto">
						<Icon src={XCircle} class="w-8 font-thin" />
					</button>
				</div>
				<Media src={currentFullscreenFileSrc} class="h-auto w-full m-1" {token} />
			</div>
		{/if}
	</div>
</div>

<style>
	.tooltip {
		position: relative;
	}
	.tooltip span {
		position: absolute;
		background-color: rgba(24, 24, 24, 0.5);
		white-space: nowrap;
		color: white;
		visibility: hidden;
		padding: 4px 5px;
	}
	.tooltip:hover span {
		visibility: visible;
		z-index: 1000;
		top: 0;
		left: 0;
	}
</style>

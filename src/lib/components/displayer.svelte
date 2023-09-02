<script lang="ts">
	import type { mFile } from '../../stores';
	import Media from './media.svelte';

	export let files: mFile[];
	export let token: string;
</script>

<div class="lg:w-full h-screen overflow-x-scroll flex flex-wrap content-start">
	{#each files as file}
		{#if file.id != null}
			<div class="tooltip">
				<div class="z-50">
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

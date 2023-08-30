<script lang="ts">
	import type { mFile } from '../../stores';
	import Media from './media.svelte';

	export let files: mFile[];
	export let token: string;
</script>

<div class="w-full">
	<div class="lg:w-full w-96 h-screen overflow-x-scroll flex flex-wrap p-8 content-start">
		{#each files as file}
			{#if file.id != null}
				<div class="tooltip tooltip-info shrink-0" data-tip={file.path}>
					<Media
						src={`https://static.ezrahuang.com/file/ezrah442-testing/${file.path}`}
						class="h-32 w-auto m-1"
						{token}
					/>
				</div>
			{/if}
		{/each}
	</div>
</div>

<script lang="ts">
	import { Icon, Folder, Document, ChevronUp, ChevronDown } from 'svelte-hero-icons';
	import type { mFile } from '../../stores';
	import ResizePanel from './ResizePanel.svelte';

	export let files: mFile[];

	let collapsed = false;

	export let toggleCollapsed = () => (collapsed = !collapsed);
</script>

<div class="ml-4">
	<ResizePanel width={150}>
		{#if collapsed}
			<button on:click={toggleCollapsed}>
				<Icon src={ChevronDown} class="w-4" />
			</button>
		{:else}
			<button on:click={toggleCollapsed}>
				<Icon src={ChevronUp} class="w-4" />
			</button>
		{/if}

		<ul hidden={collapsed} class="overflow-x-scroll">
			{#each files as file}
				<li class="flex items-center space-x-2">
					{#if file.id == null}
						<Icon src={Folder} class="w-4 shrink-0" />
						<a href={`/files/${file.path}`} class="whitespace-nowrap">
							{file.name}
						</a>
					{:else}
						<Icon src={Document} class="w-4 shrink-0" />
						<p class="whitespace-nowrap">{file.name}</p>
					{/if}
				</li>
			{/each}
		</ul>
	</ResizePanel>
</div>

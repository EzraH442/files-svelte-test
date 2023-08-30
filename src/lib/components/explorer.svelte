<script lang="ts">
	import {
		Icon,
		Folder,
		Document,
		ChevronUp,
		ChevronDown,
		ChevronRight,
		ChevronLeft
	} from 'svelte-hero-icons';
	import type { mFile } from '../../stores';

	export let files: mFile[];

	let collapsed = false;
	export let toggleCollapsed = () => (collapsed = !collapsed);
</script>

<div>
	{#if collapsed}
		<button on:click={toggleCollapsed}>
			<Icon src={ChevronRight} class="w-4" />
		</button>
	{:else}
		<button on:click={toggleCollapsed}>
			<Icon src={ChevronLeft} class="w-4" />
		</button>
	{/if}

	<ul hidden={collapsed}>
		{#each files as file}
			<li>
				{#if file.id == null}
					<Icon src={Folder} class="w-4 inline" />
				{:else}
					<Icon src={Document} class="w-4 inline" />
				{/if}
				{#if file.id == null}
					<a href={`/files/${file.path}`} class="inline">
						{file.name}
					</a>
				{:else}
					<p class="inline">{file.name}</p>
				{/if}
			</li>
		{/each}
	</ul>
</div>

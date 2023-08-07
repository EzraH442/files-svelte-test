<script lang="ts">
	import { Icon, Folder, Document } from 'svelte-hero-icons';
	import type { mFile } from '../../stores';

	export let files: mFile[];
</script>

<div class="ml-4">
	<ul>
		{#each files as file}
			<li>
				{#if file.id == null}
					<Icon src={Folder} class="w-4 inline" />
				{:else}
					<Icon src={Document} class="w-4 inline" />
				{/if}
				<a href={`/files/${file.name}`}>
					{file.name}
				</a>
			</li>
		{/each}
	</ul>
</div>

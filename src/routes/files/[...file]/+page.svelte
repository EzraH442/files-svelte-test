<script lang="ts">
	import Displayer from '$lib/components/displayer.svelte';
	import Explorer from '$lib/components/explorer.svelte';
	import ResizePanel from '$lib/components/ResizePanel.svelte';
	import { toFolders } from '$lib/util.js';
	import { Folder, Icon } from 'svelte-hero-icons';

	export let data;
	console.log(data.data.path);
</script>

<div class="ml-4">
	<div class="text-sm breadcrumbs">
		<ul>
			{#each toFolders(data.data.path) as folder}
				<li>
					<a href="/files/{folder.href}">
						<Icon src={Folder} class="w-4 mr-2" />
						{folder.folder}
					</a>
				</li>
			{/each}
		</ul>
	</div>
	<div class="flex overflow-x-scroll space-x-1">
		<div class="shrink-0">
			<ResizePanel width={150}>
				<Explorer files={data.data.files} />
			</ResizePanel>
		</div>

		<div class="shrink-0 max-w-[95vw] grow border border-black rounded-sm">
			<Displayer files={data.data.files} token={data.data.token} />
		</div>
	</div>
</div>

<script lang="ts">
	import Explorer from '$lib/components/explorer.svelte';
	import Upload from '$lib/components/upload.svelte';
	import ResizePanel from '$lib/components/ResizePanel.svelte';
	import type { PageData } from './$types.js';
	import { Folder, Icon } from 'svelte-hero-icons';

	export let data: PageData;
</script>

<div class="ml-4">
	<div class="text-sm breadcrumbs">
		<ul>
			<li>
				<a href="/files">
					<Icon src={Folder} class="w-4 mr-2" />
					Home
				</a>
			</li>
		</ul>
	</div>
	<div class="flex overflow-x-scroll space-x-1">
		<div class="shrink-0">
			<ResizePanel width={150}>
				<Explorer files={data.data} />
			</ResizePanel>
		</div>
		<div class="shrink-0 grow">
			<Upload />
		</div>
	</div>
</div>

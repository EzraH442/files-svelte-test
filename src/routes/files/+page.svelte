<script lang="ts">
	import Explorer from '$lib/components/explorer.svelte';
	import Upload from '$lib/components/upload.svelte';
	import type { PageData } from './$types.js';

	export let data: PageData;
</script>

<div>
	<div class="flex space-x-2">
		<div class="shrink-0">
			<Explorer files={data.data} />
		</div>
		<div class="shrink-0 grow">
			<Upload />
		</div>
	</div>
</div>

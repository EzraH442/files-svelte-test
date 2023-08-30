<script lang="ts">
	import Explorer from '$lib/components/explorer.svelte';
	import type { PageData } from './$types.js';

	export let data: PageData;
</script>

<div>
	<h1>files</h1>

	<Explorer files={data.data} />
</div>

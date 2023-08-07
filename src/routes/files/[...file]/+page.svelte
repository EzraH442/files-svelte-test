<script lang="ts">
	import Explorer from '$lib/components/explorer.svelte';

	export let data;
	console.log(data);
</script>

<div>
	<h1>files</h1>

	<Explorer files={data.data.files} />
</div>

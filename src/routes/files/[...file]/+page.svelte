<script lang="ts">
	import Displayer from '$lib/components/displayer.svelte';
	import Explorer from '$lib/components/explorer.svelte';

	export let data;
</script>

<div>
	<div class="flex overflow-x-scroll mx-6">
		<div class="shrink-0 mx-4">
			<Explorer files={data.data.files} />
		</div>

		<div class="shrink-0 max-w-screen-xl grow border border-black rounded-sm">
			<Displayer files={data.data.files} token={data.data.token} />
		</div>
	</div>
</div>

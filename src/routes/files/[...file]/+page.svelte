<script lang="ts">
	import Displayer from '$lib/components/displayer.svelte';
	import Explorer from '$lib/components/explorer.svelte';

	export let data;
</script>

<div>
	<div class="flex overflow-x-scroll mx-6">
		<div class="min-w-72 shrink-0 mx-4">
			<Explorer files={data.data.files} />
		</div>

		<div class="grow border-2 border-black rounded-md">
			<Displayer files={data.data.files} token={data.data.token} />
		</div>
	</div>
</div>

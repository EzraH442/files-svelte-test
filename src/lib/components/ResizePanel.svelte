<script lang="ts">
	const grabberWidth = 10;

	export let width = 40;
	let minWidth = 50;

	let expanding: boolean = false;
	let start: number | null = null;
	let initialWidth: number | null = null;

	function startExpand(event: MouseEvent) {
		expanding = true;
		start = event.pageX;
		initialWidth = width;
	}

	function stopExpand() {
		expanding = false;
		start = null;
		initialWidth = null;
	}

	function expand(event: MouseEvent) {
		if (!expanding || !start || !initialWidth) return;

		const delta = event.pageX - start;
		const newWidth = initialWidth + delta;

		if (newWidth >= minWidth) {
			width = newWidth;
		}
	}
</script>

<svelte:window on:mouseup={stopExpand} on:mousemove={expand} />

<div class="relative">
	<div style={`width: ${width}px`} class="h-full px-2 py-3 bg-zinc-200">
		<slot />
	</div>
	<svg
		height="100%"
		width={grabberWidth + 20}
		class="absolute h-full z-10 top-0"
		style={`margin-left: ${width - grabberWidth}px`}
	>
		<rect
			width={grabberWidth}
			height="100%"
			fill="blue"
			class="grip"
			on:mousedown={(e) => startExpand(e)}
			class:active={expanding}
			role="none"
		/>
	</svg>
</div>

<style>
	.grip {
		cursor: col-resize;
		fill: #fff0;
	}
	.grip.active,
	.grip:hover {
		fill: #2288;
	}
</style>

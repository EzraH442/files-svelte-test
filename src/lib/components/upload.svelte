<script lang="ts">
	import { DocumentArrowUp, Icon } from 'svelte-hero-icons';
	import { fromEvent } from 'file-selector';

	const onDrop = async (e: DragEvent) => {
		e.preventDefault();
		e.stopPropagation();
		const files = await fromEvent(e);
		console.log(files);
		files.forEach((f) => {
			if (f instanceof DataTransferItem) {
				f.getAsFile();
			} else {
			}
		});
	};

	const stop = (e: DragEvent) => {
		e.preventDefault();
		e.stopPropagation();
	};

	const onInput = async (e: Event & { currentTarget: HTMLInputElement }) => {
		const files = await fromEvent(e);
		console.log(files);
		files.forEach((f) => {
			if (f instanceof DataTransferItem) {
				f.getAsFile();
			} else {
			}
		});
	};
</script>

<input multiple class="hidden" id="files" type="file" on:change={onInput} tabindex={-1} />

<label for="files">
	<div
		on:drop={(e) => onDrop(e)}
		on:drag={stop}
		on:dragstart={stop}
		on:dragend={stop}
		on:dragenter={stop}
		on:dragleave={stop}
		on:dragover={stop}
		class="border border-dashed border-black border-sm w-full h-full flex items-center justify-center"
		role="button"
		tabindex={0}
	>
		<div class="flex flex-col items-center">
			<Icon src={DocumentArrowUp} class="w-8" />
			<p>Drag and drop files/folders to upload</p>
		</div>
	</div>
</label>

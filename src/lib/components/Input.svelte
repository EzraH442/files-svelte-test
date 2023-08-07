<script lang="ts">
	export let name: string;
	export let label = '';
	export let type = '';
	export let placeholder = '';
	export let value = '';
</script>

<div>
	<label class="label" for={name}>
		<span class="label-text">{label}</span>
	</label>
	<input {name} {type} {placeholder} {value} class="input input-bordered" />
</div>

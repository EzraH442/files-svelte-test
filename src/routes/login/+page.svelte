<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import { onMount } from 'svelte';
	import { PUBLIC_hcaptchaSitekey } from '$env/static/public';

	const onSubmit = (token: string) => {
		console.log(token);
		console.log('test');
		// redirect(300, '/home');
	};

	onMount(() => {
		// @ts-ignore
		window.onSubmit = onSubmit;

		return () => {
			// @ts-ignore
			window.onSubmit = null;
		};
	});
</script>

<svelte:head>
	<script src="https://js.hcaptcha.com/1/api.js" async defer></script>
</svelte:head>

<div class="w-48 ml-8">
	<form class="form-control" method="post">
		<Input label="Email" name="email" type="email" />
		<Input label="Password" name="password" type="password" />

		<div class="my-2">
			<div class="h-captcha" data-sitekey={PUBLIC_hcaptchaSitekey} />
		</div>

		<input type="submit" class="btn btn-primary" value="Submit" />
	</form>
</div>

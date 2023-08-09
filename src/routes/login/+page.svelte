<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import { PUBLIC_hcaptchaSitekey } from '$env/static/public';
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

<script>
	import '../app.css';
	import { goto } from '$app/navigation';

	async function handleSignOut() {
		await goto(`/?signout=true`);
	}
</script>

<div>
	<div class="navbar">
		<a class="btn" href="/">Home</a>
		<a class="btn" href="/files">Files</a>
		<!-- <a class="btn" href="/upload">Upload</a> -->
		<a class="btn" href="/login">Login</a>
		<button class="btn" on:click={handleSignOut}>Sign out</button>
	</div>
	<slot />
</div>

/* dev
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import mkcert from 'vite-plugin-mkcert';

export default defineConfig({
	server: { https: true },
	plugins: [mkcert(), sveltekit()],
	ssr: {
		noExternal: ['svelte-hero-icons']
	}
});
*/

// prod
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	server: { https: false },
	plugins: [sveltekit()],
	ssr: {
		noExternal: ['svelte-hero-icons']
	}
});

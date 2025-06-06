import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		allowedHosts: ['marnitzmalan.com', 'www.marnitzmalan.com']
	},
	optimizeDeps: {
		exclude: ['@sveltejs/kit']
	},
	ssr: {
		noExternal: ['@sveltejs/kit']
	}
});
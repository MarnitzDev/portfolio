import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		host: '0.0.0.0',
		port: process.env.PORT || 5173,
		allowedHosts: ['marnitzmalan.com', 'www.marnitzmalan.com']
	},
	optimizeDeps: {
		exclude: ['@sveltejs/kit']
	},
	ssr: {
		noExternal: ['@sveltejs/kit']
	}
});
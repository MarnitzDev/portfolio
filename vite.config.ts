import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		host: '0.0.0.0',
		port: Number(process.env.PORT) || 3000,
		strictPort: true,
		allowedHosts: ['portfolio-57kp.onrender.com', 'localhost']
	},
	preview: {
		host: '0.0.0.0',
		port: Number(process.env.PORT) || 3000,
		strictPort: true,
		allowedHosts: ['portfolio-57kp.onrender.com', 'localhost']
	},
	optimizeDeps: {
		exclude: ['@sveltejs/kit']
	},
	ssr: {
		noExternal: ['@sveltejs/kit']
	}
});
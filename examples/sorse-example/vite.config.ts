import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
	resolve: {
		alias: {
			"sorse": resolve(__dirname, "../../src/index.ts")
		}
	}
})
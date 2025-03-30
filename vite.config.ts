import { defineConfig } from "vite"
import type { CommonServerOptions } from "vite"
import { sveltekit } from "@sveltejs/kit/vite"
import { enhancedImages } from "@sveltejs/enhanced-img"
import mkcert from "vite-plugin-mkcert"
import tailwindcss from "@tailwindcss/vite"

const serverConfig: CommonServerOptions = {
    https: true,
    host: "127.0.0.1",
    port: 3000,
    strictPort: true,
    proxy: {}
}

export default defineConfig({
    server: serverConfig,
    preview: serverConfig,
    plugins: [tailwindcss(), sveltekit(), enhancedImages(), mkcert()]
})

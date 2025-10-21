import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react"
import { federation } from "@module-federation/vite"

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "")

  return {
    build: {
      emptyOutDir: true,
      target: "esnext",
      minify: false,
      cssCodeSplit: false,
      modulePreload: false
    },
    preview: {
      port: parseInt(env.VITE_PORT),
      allowedHosts: true
    },
    server: {
      port: parseInt(env.VITE_PORT)
    },
    plugins: [
      react(),
      federation({
        name: "someRemote",
        filename: "remoteEntry.js",
        exposes: {
          "./RemoteButton": "./src/components/RemoteButton.tsx"
        },
        shared: {
          react: {
            singleton: true
          },
          "react-dom": {
            singleton: true
          }
        }
      })
    ]
  }
})

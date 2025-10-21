import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react"
import { federation } from "@module-federation/vite"
import { dependencies } from "./package.json"

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "")

  return {
    build: {
      emptyOutDir: true,
      target: "esnext",
      cssCodeSplit: false,
      modulePreload: false
    },
    preview: {
      port: parseInt(env.VITE_PORT)
    },
    server: {
      port: parseInt(env.VITE_PORT)
    },
    plugins: [
      react(),
      federation({
        name: "host",
        filename: "remoteEntry.js",
        remotes: {
          someRemote: {
            type: "module",
            name: "someRemote",
            entry: "http://localhost:6002/remoteEntry.js"
          }
        },
        shared: {
          react: {
            singleton: true,
            requiredVersion: dependencies.react
          },
          "react-dom": {
            singleton: true,
            requiredVersion: dependencies["react-dom"]
          }
        }
      })
    ]
  }
})

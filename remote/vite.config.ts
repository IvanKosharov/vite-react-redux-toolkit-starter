import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react"
import { federation } from "@module-federation/vite"
import { dependencies } from "./package.json"
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js"

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
      cssInjectedByJsPlugin({
        // This ensures styles are injected when the main remote entry is loaded
        jsAssetsFilterFunction: (outputChunk) =>
          outputChunk.fileName === "remoteEntry.js"
      }),
      federation({
        name: "someRemote",
        filename: "remoteEntry.js",
        exposes: {
          "./RemoteButton": "./src/components/RemoteButton.tsx"
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

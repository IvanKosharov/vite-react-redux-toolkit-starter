import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { RemoteButton } from "./components/RemoteButton"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RemoteButton />
  </StrictMode>
)

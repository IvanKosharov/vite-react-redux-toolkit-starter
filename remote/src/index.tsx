import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Devices } from "./components/Devices"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Devices />
  </StrictMode>
)

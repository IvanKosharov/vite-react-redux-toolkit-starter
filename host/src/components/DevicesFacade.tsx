import React, { Suspense } from "react"
import { importDevices } from "../remoteImports"

const Devices = React.lazy(importDevices)

export const DevicesFacade = () => {
  return (
    <Suspense fallback={<div>Loading devices...</div>}>
      <Devices />
    </Suspense>
  )
}

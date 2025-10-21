import React, { Suspense } from "react"
import { importRemoteButton } from "../remoteImports"

const RemoteButton = React.lazy(importRemoteButton)

export const RemoteButtonFacade = () => {
  return (
    <>
      Remote button below:
      <Suspense fallback={<div>Loading remote button...</div>}>
        <div>
          <RemoteButton />
        </div>
      </Suspense>
    </>
  )
}

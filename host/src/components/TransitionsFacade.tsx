import React, { Suspense } from "react"
import { importTransitions } from "../remoteImports"

const Transitions = React.lazy(importTransitions)

export const TransitionsFacade = () => {
  return (
    <Suspense fallback={<div>Loading transitions...</div>}>
      <Transitions />
    </Suspense>
  )
}

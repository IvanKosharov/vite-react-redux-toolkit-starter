import { createSelector } from "reselect"
import { RootState } from "../store"

const counterRootSelector = (state: RootState) => state.counter

export const countSelector = createSelector(
  counterRootSelector,
  (state) => state.value
)

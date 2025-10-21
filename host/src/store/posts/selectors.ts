import { createSelector } from "reselect"
import { RootState } from "../store"

const postsRootSelector = (state: RootState) => state.posts

export const postsSelector = createSelector(
  postsRootSelector,
  (state) => state.posts
)

export const fetchingPostsSelector = createSelector(
  postsRootSelector,
  (state) => state.fetching
)

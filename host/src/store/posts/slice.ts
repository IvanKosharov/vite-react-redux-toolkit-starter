import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Post } from "../../types"

interface PostsState {
  fetching: boolean
  error?: string
  posts: Post[]
}

const initialState: PostsState = {
  fetching: false,
  posts: []
}

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    fetchPostsRequest(state) {
      state.fetching = true
    },
    fetchPostsSuccess(state, action: PayloadAction<Post[]>) {
      state.fetching = false
      state.posts = action.payload
      state.error = undefined
    },
    fetchPostsError(state, action: PayloadAction<string>) {
      state.fetching = false
      state.error = action.payload
    }
  }
})

export const { fetchPostsRequest, fetchPostsSuccess, fetchPostsError } =
  postsSlice.actions

export default postsSlice.reducer

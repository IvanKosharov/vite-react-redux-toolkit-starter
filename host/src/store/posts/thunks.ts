import { fetchPostsError, fetchPostsRequest, fetchPostsSuccess } from "./slice"
import { AppDispatch } from "../store"

export const fetchPosts = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(fetchPostsRequest())

    try {
      const url = import.meta.env.VITE_POSTS_URL // from .env file
      const response = await fetch(url)
      const posts = await response.json()

      dispatch(fetchPostsSuccess(posts))
    } catch (error) {
      dispatch(fetchPostsError(error as any))
    }
  }
}

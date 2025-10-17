import { fetchPostsError, fetchPostsRequest, fetchPostsSuccess } from "./slice"
import { AppDispatch } from "../store"

export const fetchPosts = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(fetchPostsRequest())

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts")
      const posts = await response.json()

      dispatch(fetchPostsSuccess(posts))
    } catch (error) {
      dispatch(fetchPostsError(error as any))
    }
  }
}

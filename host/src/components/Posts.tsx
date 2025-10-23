import React from "react"
import cssClasses from "./Posts.module.css"
import { useAppDispatch, useAppSeletor } from "../store/store"
import { fetchPosts } from "../store/posts/thunks"
import { fetchingPostsSelector, postsSelector } from "../store/posts/selectors"

export const Posts = () => {
  const dispatch = useAppDispatch()
  const posts = useAppSeletor(postsSelector)
  const fetching = useAppSeletor(fetchingPostsSelector)

  React.useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  return (
    <div className={cssClasses.container}>
      {fetching && <p>Loading...</p>}
      <ul>
        {posts.slice(0, 10).map((post, idx) => (
          <li key={idx}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

import cssClasses from "./Posts.module.css"
import { useAppDispatch, useAppSeletor } from "../store/store"
import { fetchPosts } from "../store/posts/thunks"
import { fetchingPostsSelector, postsSelector } from "../store/posts/selectors"

export const Posts = () => {
  const dispatch = useAppDispatch()
  const posts = useAppSeletor(postsSelector)
  const fetching = useAppSeletor(fetchingPostsSelector)

  return (
    <div className={cssClasses.container}>
      <button onClick={() => dispatch(fetchPosts())}>Fetch</button>
      <div className={cssClasses.header}>Posts:</div>
      {fetching && <p>Loading...</p>}
      {posts.slice(0, 10).map((post, idx) => (
        <div key={idx}>{post.title}</div>
      ))}
    </div>
  )
}

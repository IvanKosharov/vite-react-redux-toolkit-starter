import cssClasses from "./Posts.module.css"
import { useAppDispatch, useAppSeletor } from "../store/store"
import { fetchPosts } from "../store/posts/thunks"

export const Posts = () => {
  const dispatch = useAppDispatch()
  const { fetching, posts } = useAppSeletor((state) => state.posts)

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

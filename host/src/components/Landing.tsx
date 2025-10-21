import { NavLink } from "react-router"

export const Landing = () => {
  return (
    <>
      <NavLink to="/posts">Go to Posts</NavLink>
      <br />
      <NavLink to="/remote-button">Go to remote button</NavLink>
    </>
  )
}

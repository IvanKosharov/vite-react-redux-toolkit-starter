import { NavLink } from "react-router"
import cssClasses from "./NavBar.module.css"

export const NavBar = () => {
  return (
    <div className={cssClasses.root}>
      <NavLink to="/posts">Posts</NavLink>
      <NavLink to="/remote-button">Remote button</NavLink>
    </div>
  )
}

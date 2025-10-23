import { Link } from "react-router"
import cssClasses from "./NavBar.module.css"

export const NavBar = () => {
  return (
    <div className={cssClasses.root}>
      <Link to="/posts">Posts</Link>
      <Link to="/devices">Devices</Link>
    </div>
  )
}

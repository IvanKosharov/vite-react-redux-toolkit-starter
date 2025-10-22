import { Posts } from "./Posts"
import { Routes, Route } from "react-router"
import "./App.css" // general styles for entire app
import { RemoteButtonFacade } from "./RemoteButtonFacade"
import { NavBar } from "./NavBar"

export const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="posts" element={<Posts />} />
        <Route path="remote-button" element={<RemoteButtonFacade />} />
      </Routes>
    </>
  )
}

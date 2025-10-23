import { Posts } from "./Posts"
import { Routes, Route } from "react-router"
import "./App.css" // general styles for entire app
import { DevicesFacade } from "./DevicesFacade"
import { NavBar } from "./NavBar"

export const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="posts" element={<Posts />} />
        <Route path="devices" element={<DevicesFacade />} />
      </Routes>
    </>
  )
}

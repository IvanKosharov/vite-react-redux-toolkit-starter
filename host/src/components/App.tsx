import { Posts } from "./Posts"
import { BrowserRouter, Routes, Route } from "react-router"
import "./App.css" // general styles for entire app
import { Landing } from "./Landing"
import { RemoteButtonFacade } from "./RemoteButtonFacade"

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="posts" element={<Posts />} />
        <Route path="remote-button" element={<RemoteButtonFacade />} />
      </Routes>
    </BrowserRouter>
  )
}

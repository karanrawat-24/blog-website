import { Route, Routes } from "react-router-dom"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import Blogs from "./pages/Blogs"
import Blog from "./pages/Blog"

const App = () => {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blog/:id" element={<Blog />} />

    </Routes>
  )
}

export default App
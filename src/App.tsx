import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Layout } from "./components/Layout"
import { Home } from "./pages/Home"
import { InProgress } from "./pages/InProgress"
import { Menu } from "./pages/Menu/Menu"
import { CategoryLayout } from "./components/CategoryLayout"

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/inprogress' element={<InProgress />} />
          <Route path='/menu' element={<Menu />} />
          <Route path="/menu/:category" element={<CategoryLayout />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App

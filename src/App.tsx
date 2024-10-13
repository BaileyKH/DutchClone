import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Layout } from "./components/Layout"
import { Home } from "./pages/Home"
import { InProgress } from "./pages/InProgress"

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/inprogress' element={<InProgress />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App

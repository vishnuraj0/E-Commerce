import { Routes, Route } from "react-router-dom"
import NavbarComp from "./Components/Navbar"
import LoginFrom from "./Components/auth/Login"

function App() {
  

  return (
    <>
    <NavbarComp/>
    <Routes>
      <Route path="/" element={<LoginFrom />} />
    </Routes>
    </>
  )
}

export default App

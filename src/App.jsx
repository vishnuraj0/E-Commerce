import { Routes, Route } from "react-router-dom"
import Card from "./Components/Card"
import NavbarComp from "./Components/Navbar"

function App() {
  

  return (
    <>
    <NavbarComp/>
    <Routes>
      <Route path="/" element={<Card />} />
    </Routes>
    </>
  )
}

export default App

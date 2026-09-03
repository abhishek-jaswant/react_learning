import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import  About  from "./pages/About"
import { Details } from "./pages/Details"
import { Navbar } from "./Component/Navbar"
import "./App.css"


function App(){

  return (
    <>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </>
  )
}

export default App

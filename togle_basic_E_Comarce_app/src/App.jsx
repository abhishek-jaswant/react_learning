
import { Home } from './component/home'
import './App.css'
import { Detail } from './component/Detail'
import { Route,Routes } from 'react-router-dom'
import { About } from './component/About'
import { Navbar } from './component/Navbar'

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/posts/:id" element={<Detail/>}/>
        <Route path="/about" element={<About/>}/>

      </Routes>    
    </>
  )
}

export default App

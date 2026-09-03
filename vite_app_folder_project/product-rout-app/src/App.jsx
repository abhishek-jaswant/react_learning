

import './App.css'
import { NavBar } from './Component/NavBar.jsx'
import { Routes, Route } from 'react-router-dom'
import { MainComponent } from './Component/MainComponent.jsx'
import { ProductDetails } from './Component/ProductDaitals.jsx'
import { Footer } from './Component/Footer.jsx'

function App() {


  return (
    <>
      <NavBar />
      
            <Routes>
              <Route path="/" element={<MainComponent />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        
      </Routes>
      <Footer />
     
    </>
  )
}

export default App

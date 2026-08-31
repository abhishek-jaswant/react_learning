import { useState } from 'react'

import './App.css'
import CardComponent from './component/CardComponent'

function App() {
  const [count, setCount] = useState(0)
  const handleEncrease = () => {
    setCount(count + 1)
  }
  const handleDecrease = () => {
    if (count > 0) { 
      setCount(prev=> prev - 1)
    }

} 
//count,handleDecrease,handleIncrease
  return (
    <>
     
   <CardComponent count={count} handleDecrease={handleDecrease} handleIncrease={handleEncrease}/>
     </>
  )
}

export default App

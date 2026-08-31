import { useState } from 'react'

import './App.css'
import ThemeCard from './Component/ThemeCard';

function App() {

  const [theme, setTheme] = useState('light');

  const handleTheme = () => {
    setTheme(previousTheme => previousTheme === 'light' ? 'dark' : 'light');
  }

  return (
    <>
     <ThemeCard theme={theme} handleTheme={handleTheme}/>
    </>
  )
}

export default App

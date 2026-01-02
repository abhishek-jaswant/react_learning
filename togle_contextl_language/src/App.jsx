

import './App.css'
import { uselanguage } from './context/LanguageContextProvider'

function App() {
  
  const {language,togle}=uselanguage()
  const obj = {
    

      English: {
      title: "Hello Masai",
      greeting: "Welcome! Let’s start learning together"
    },

     Hindi: {
     title: "नमस्ते मसाई",
     greeting: "स्वागत है! आइए मिलकर सीखना शुरू करें"
    }
  
};


  return (
    <>
      <div style={{height:"100px"}}>
        <h1>{obj[language].title}</h1>
        <h1>{obj[language].greeting}</h1>
   
     <button onClick={togle}>{language=="English"?"Hindi":"English"}</button>
      </div>
    </>
  )
}

export default App

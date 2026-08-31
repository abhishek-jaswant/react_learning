import { useState } from 'react'

import './App.css'
import CorrectWordCard from './component/CorrectWordCard';

function App() {
  const corrections = {
  "teh": "the",
  "recieve": "receive",
  "adress": "address",
  "wierd": "weird",
  "thier": "their"
  };
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleOutput = (e) => { 
    e.preventDefault();
    setOutput(previousOutput => {
      const words = input.split(" ");
      const correctedWords = words.map(word => corrections[word] || word);
      return correctedWords.join(" ");
    });
  }

const deleOutput = () => {
  setOutput("");
  setInput("");
}


  return (
    <>
    <CorrectWordCard input={input} handleInput={handleInput} handleOutput={handleOutput} deleteOutput={deleOutput} outPut={output}/>
    </>
  )
}

export default App

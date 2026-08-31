import React from 'react'
const CorrectWordCard = (props) => {
   const { input, handleInput, handleOutput, deleteOutput,outPut } = props;
    return (
        <>
            <div style={{ border: "1px solid black", width: "400px", height: "200px", margin: "auto", textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "20px" }}>
                < h1 style={{ textAlign: "center", marginTop: "20px" }}>Auto Correct App</h1>
                <h2 style={{ fontSize: "20px", marginTop: "10px" }}>Corrected Text: {outPut}</h2>
                
            <form onSubmit={handleOutput} style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: "10px" }}>
                <input type="text" value={input} name="input" placeholder="Enter Text" onChange={handleInput} style={{ padding: "8px" }} />
                <button type="submit" style={{ padding: "8px", marginTop: '10px', backgroundColor: '#007bff', color: 'white', border: 'none' }}>Correct</button>
                <button type="button" onClick={deleteOutput} style={{ padding: "8px", marginTop: '10px', backgroundColor: '#dc3545', color: 'white', border: 'none' }}>Delete</button>
            </form>
           
            </div>
        </>
  )
   
}
export default CorrectWordCard
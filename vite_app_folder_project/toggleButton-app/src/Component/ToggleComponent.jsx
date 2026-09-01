
import React from 'react'
import { useState } from 'react'

export default function ToggleComponent() { 
    const [toggle, setToggle] = useState(false)
    const handleToggle = () => {
        setToggle(!toggle)
    }
    return (
        <div style={{border:"1px solid black",width:"300px",height:"200px",margin:"auto",textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"20px"}}>
            <h1 style={{fontSize:"30px"}}>Toggle Component</h1>
            <p style={{ color: toggle ? 'green' : 'red' ,fontSize:"30px"}}>Toggle is {toggle ? 'ON' : 'OFF'}</p>
            <button style={{backgroundColor:toggle?"green":"red",color:"white",border:"none",borderRadius:"5px",padding:"10px 20px"}} onClick={handleToggle}>Toggle</button>
        </div>
    )

}
    
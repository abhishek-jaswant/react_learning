import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav style={{
        display:"flex",
         justifyContent:"flex-start",
        alignItems:"center",
        padding:"20px 20px",
        backgroundColor:"lightblue"
                  
    }}>
     <div style={{display:"flex",
                gap:"20px",
               
     }}>
        <Link to="/" style={{fontSize:"30px",color:"red"}}>home</Link>
     <Link to="/about"style={{fontSize:"30px",color:"red"}}>about</Link>
     </div>
    </nav>
  )
}

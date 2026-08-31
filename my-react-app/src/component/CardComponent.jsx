

import React from 'react'
const CardComponent = (props ) => {
    const {count,handleDecrease,handleIncrease} = props
  return (
    <div style={{border:"1px solid black",width:"300px",height:"200px",margin:"auto",textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          <h2 style={{fontSize:"30px"}}> Count is {count}</h2>

          <div style={{ display: "flex", justifyContent: "space-around", width: "100%", marginTop: "20px" }}>
              
          <button style={{backgroundColor:"red",color:"white",border:"none",borderRadius:"5px",padding:"10px 20px"}} onClick={handleDecrease}>Decrease</button>
              <button style={{backgroundColor:"green",color:"white",border:"none",borderRadius:"5px",padding:"10px 20px"}} onClick={handleIncrease}>Increase</button>
              </div>
   </div>
  )
}
       
  


export default CardComponent
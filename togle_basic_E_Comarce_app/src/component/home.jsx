import { useState } from "react"
import { Link } from "react-router-dom"
import { usedata } from "../context/DataProvider.jsx"
export const Home=()=>{
    const {data,error,loading}=usedata()

    const [search,setSearch]=useState("")

    const [searchdata,setSearchdata]=useState([])

     
    const totalItem=data.length;
    const itemperpage=5;
    const [currantpage,setCurrentPage]=useState(1)
    const  totalpage= Math.ceil(totalItem/itemperpage)
        
    const startIndex=(currantpage-1)*itemperpage
    const endIndex=startIndex+itemperpage

    const paginationdata=data.slice(startIndex,endIndex)
    
    const nextPage = () => {
  if (currantpage < totalpage) {
    setCurrentPage(currantpage + 1);
  }
};

const prevPage=()=>{
  if(currantpage>1)
  {
    setCurrentPage(currantpage-1)
  }
}
const searching=()=>{

      const searchdata=paginationdata.filter(t=>t.title.toLowerCase().includes(search.toLowerCase()))
      setSearchdata(searchdata)
    }

       

     if (loading) return <h2 style={{textAlign:"center",color:"red"}}>Loading...</h2>;
  if (error) return <h2  style={{textAlign:"center",color:"red"}}> Something went wrong</h2>;



    return(
        <div style={{marginTop:"10px",gap:"20px",backgroundColor:"lightgray"}}>

            <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"center"}}>
             <input type="text"
             value={search} 
             onChange={(e)=>setSearch(e.target.value)}
             placeholder="Search Post..."
             style={{
              fontSize:"20px",
              borderRadius:"5px",
              border: "1px solid #ccc",
              width: "250px"
              
            }}
             />
             <button onClick={searching} style={
              {color:"blue",
              borderRadius:"5px",
              fontSize:"20px",
              backgroundColor:"lightcoral",
             cursor:"pointer",
             border: "none",
             color: "white" 
             }}>search</button>
            </div>

            <div style={{display:"flex", justifyContent:"space-between",
                         margin:"40px"
            }}>

              <button onClick={nextPage} style={{fontSize:"30px",backgroundColor:"blue",borderRadius:"10px",color:"white"}}>Next</button>
              <button onClick={prevPage} style={{fontSize:"30px",backgroundColor:"blue",borderRadius:"10px",color:"white"}}>Prev</button>
            </div>

            <div style={{ display: "flex",
                          gap: "20px",
                          flexWrap: "wrap" }}>

              {(searchdata.length > 0 ? searchdata :paginationdata).map((t) => (
              <div key={t.id} style={{width:"35%",border:"1px solid #ddddddff",padding:"10px",borderRadius:"6px"}}> 
              <h1 style={{fontSize:"15px"}}>{t.title}</h1>
               <p>{t.body}</p>
              <Link to={`/posts/${t.id}`}>View Detail</Link>
              </div>
                ))}
            </div>
        </div>
    )
}
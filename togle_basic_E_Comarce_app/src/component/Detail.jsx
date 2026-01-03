import {  useParams } from "react-router-dom"
import { usedata } from "../context/DataProvider"

export const Detail=()=>{
    const {id}=useParams()
     const {data,error,loading}=usedata()


  if(loading)
    return <p>post is loading</p>

  if(error)
  {
    return <p>Something went wrong</p>
  }
  const viedata=data?.find((t)=>t.id==id)

  if (!viedata) {
    return <p>Post not found</p>;
  }

     return(
        <div>
             <h1>{viedata.title}</h1>
             <p>{viedata.body}</p>
              <p>tags is</p>
             {viedata?.tags?.map((t, i) => (
              <div key={i}>
             <p>{t}</p>
             </div>
              ))}

              <p> llike is {viedata.reactions.likes}</p>
              <p>dislikes is{viedata?.reactions?.dislikes}</p>

               <p> views is {viedata?.views}</p>
              <p>  userId is{viedata?.userId}</p>



        </div>
       
     )
    
}         
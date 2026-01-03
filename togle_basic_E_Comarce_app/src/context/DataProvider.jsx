import { createContext,useContext, useEffect, useState  } from "react";

const context=createContext(null)

export const DataContextProvider=({children})=>
{
const [data,setData]=useState([])
const [error,setError]=useState(false)
const [loading,setLoading]=useState(false)

useEffect(() => {
  const fetchPosts = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/posts");
      const data = await res.json();
      setData(data.posts);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  fetchPosts();
}, []);



return(
<context.Provider value={{data,error,loading}}>

{children}
</context.Provider>)


}


 export const usedata=()=>useContext(context)
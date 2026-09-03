
import { createContext, useState, useEffect } from "react";
 export const Context=createContext();
export const ContextProvider = ({ children }) => {
  const [data, setdata] = useState({
    loading: false,
    data: null,
    error: null,
  });
  
  const [search, setSearch] = useState('');

  useEffect(() => {
    
    if (search.length > 0) { 
      setdata(prevState => ({
        ...prevState,
        data: prevState.data.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
      }));
    }

  },[search])

  useEffect(() => {
    // Simulate an API call
   
    const fetchData = async () => {
      setdata({ loading: true, data: null, error: null });
      try {
        const response = await fetch('https://dummyjson.com/posts');
        const data = await response.json();
        console.log(data.posts);
        setdata({ loading: false, data: data.posts, error: null });
      } catch (error) {
        setdata({ loading: false, data: null, error });
      }
    }
    fetchData();
  }, []);



  return (
    <Context.Provider value={{ data, search, setSearch }}>
      {children}
    </Context.Provider>
  );
};
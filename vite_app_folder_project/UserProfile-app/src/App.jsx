import { useState, useEffect } from 'react'

import './App.css'
import Userdata from './Compoent/Userdata'
import axios from 'axios'
function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [search, setSearch] = useState("")
  const [searchResults, setSearchResults] = useState([])  


  useEffect(() => {
    
    const datafetch = async () => {
      try {
        setLoading(true)
        const response= await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(response.data)
        setData(response.data)
        
      }
      catch (error) {
        console.log(error.message)
        setError(error.message)
        
      }finally {
        setLoading(false)

      }

    }
    datafetch()
  }, [])


  const handleSearch = (e) => { 
    setSearchResults(data.filter(item => item.name.toLowerCase().includes(search.toLowerCase())))
  } 

  // if(!data.length){
  //   return <p className="loading">Loading...</p>
  // }
  return (
    <>
     <Userdata loading={loading} error={error} data={data} search={search} searchResults={searchResults} setSearch={setSearch}  handleSearch={handleSearch} />
    </>
  )
}

export default App

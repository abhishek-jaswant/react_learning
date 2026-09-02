

import './App.css'
import { useContext,useEffect,useState } from 'react'
import axios from 'axios'

import { ThemeContext } from './context/ThemeContextProvider.jsx'
function App() {
  const [data, setData] = useState({
    Loading: false,
    error: null,
    data: null,
  })


  const { theme, toggleTheme } = useContext(ThemeContext)

  useEffect( () => {
   
    const fetchData = async () => {
      try {

        setData({
          Loading: true,
          error: null,
          data: null,
        })
        const response = await axios.get('https://fakestoreapi.com/products')
        setData({
          Loading: false,
          error: null,
          data: response.data,
        })

      } catch (error) {

        setData({
          Loading: false,
          error: error.message,
          data: null,
        })

      }
    }

    fetchData()
    

    
    
 
   }, [])
 
  if (!data.data)
    return ( <div className={theme}>Loading...</div>)
  return (
    <>
      
      <div className={theme}>
       
        <header className={theme==="dark"?"dark-header":"light-header"}>
          <h1>Theme App</h1>
          <button onClick={toggleTheme} className={theme==="dark"?"dark-button":"light-button"}>
            {theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}
          </button>
        </header>

        <main className={theme==="dark"?"dark-main":"light-main"}>
          {data.Loading && <p className={theme==="dark"?"dark-loading":"light-loading"}>Loading...</p>}
          {data.error && <p className={theme==="dark"?"dark-error":"light-error"}>{data.error}</p>}
          {data.data && (
            <div className={theme==="dark"?"dark-data":"light-data"}>
              {data.data.map((item) => (
                <div key={item.id} className={theme==="dark"?"dark-data-item":"light-data-item"}>
                   
                  <img src={item.image} alt={item.name} />
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <h2>Price: ${item.price}</h2>
                </div>
              ))}
            </div>
          )}
        </main>
        <footer className={theme==="dark"?"dark-footer":"light-footer"}>
          <p>Copyright © 2023 Theme App</p>
        </footer>

      </div>
    </>
  )
}

export default App

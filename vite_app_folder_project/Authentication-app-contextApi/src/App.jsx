import { useState,useContext,useEffect } from 'react'
import { AuthContext } from './Context/AuthProvider.jsx'

import './App.css'

function App() {
  const [data, setData] = useState({
    Loading: false,
    error: null,
    items: null,

  })
  const { isAuthenticated, handleLogin } = useContext(AuthContext)
  useEffect(() => {
    const fetchData = async () => {
      try {
        setData({
          Loading: true,
          error: null,
          items: null,
        })
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setData({
          Loading: false,
          error: null,
          items: data,
        })
      } catch (error) {
        setData({
          Loading: false,
          error: error.message,
          items: null,
        })
      }
    }
    fetchData()
  }, [])

  if (!isAuthenticated) {
    return (
        <button onClick={handleLogin} className="App-button">
            {isAuthenticated ? 'Logout' : 'Login'}
          </button>
      )
   }
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Authentication App</h1>
          <button onClick={handleLogin} className="App-button">
            {isAuthenticated ? 'Logout' : 'Login'}
          </button>
        </header>
        <main className="App-main">
          {data.Loading && <p className="App-loading">Loading...</p>}
          {data.error && <p className="App-error">{data.error}</p>}
          {data.items && (
            <div className="App-data">
              {data.items.map((item) => (
                <div key={item.id} className="App-data-item">
                  <img src={item.image} alt={item.name} />
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <h2>Price: ${item.price}</h2>
                </div>
              ))}
            </div>
          )}
        </main>
        <footer className="App-footer">
          <p>{isAuthenticated ? 'Welcome User' : 'Please log ...'}</p>
        </footer>
      </div>  
      
    </>
  )
}

export default App

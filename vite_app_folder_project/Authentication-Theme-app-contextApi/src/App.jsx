import { useState,useContext,useEffect } from 'react'

import './App.css'
import { AuthContext } from './context/AuthContext.jsx'
import { ThemeContext } from './context/ThemeContext.jsx'
import Sidebar from './component/Sidebar.jsx'
function App() {
  const [data, setData] = useState({
    Loading: false,
    error: null,
    items: null,

  })

  const { isAuthenticated, handleLogin } = useContext(AuthContext)
  const {theme, toggleTheme} = useContext(ThemeContext)

  useEffect(() => {
    const fetchData = async () => {
      setData({ Loading: true, error: null, items: null })
      try {
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

  
  return (
    <>
      <div className={`min-h-screen flex-col ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}>

        <header className={`px-5 py-4 flex justify-between items-center shadow-md ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"}`}>

          <nav className={`flex gap-6 items-center`}>

            <a href="#" className="font-semibold">{isAuthenticated ? 'Loged In..' : 'Logged Out..'}</a>
            <button onClick={toggleTheme} className={`px-4 py-2 rounded-md cursor-pointer transition ${theme === "dark" ? "bg-gray-700 text-white border-gray-500 hover:bg-gray-600" : "bg-blue-500 text-white hover:bg-blue-600 hover:bg-blue-600"}`}>{theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}</button>
            </nav>
          
              
    

            <button onClick={handleLogin} className={`px-4 py-2 rounded-md cursor-pointer transition ${theme === "dark" ? "bg-gray-700 text-white border-gray-500 hover:bg-gray-700" : "bg-blue-500 text-white hover:bg-blue-600 hover:bg-blue-700"}`}>{isAuthenticated ? 'Logout' : 'Login'}</button>
    

        </header>


        <div className={`flex-1 p-5 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
        <Sidebar />
        <main className={`flex-1 p-5 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
         
            {data.Loading && <p className="text-2xl text-center py-10">Loading...</p>}
          {data.error && <p className="text-2xl text-center py-10 text-red-500">{data.error}</p>}
         
            {data.items && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {data.items.map((item) => (
                <div key={item.id} className={`p-5 rounded-xl shadow-md flex flex-col items-center transition hover:scale-[1.02] hover:shadow-lg ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
                  <img src={item.image} alt={item.title} className="w-full h-full object-contain rounded-md" />
                  <div className="p-5">
                    <h2 className="text-lg mt-4 font-bold ">{item.title}</h2>
                    <p className="text-sm mt-3 line-clamp-3">{item.description}</p>
                    <h2 className="text-xl font-semibold mt-4">Price: ${item.price}</h2>
                  </div>
                </div>
              ))}
              
            </div>
          )}
          </main>
        </div>
        
       
        <footer className={ `p-4 text-center ${theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-200 text-black"}`}>
          <p>{isAuthenticated ? 'Welcome User' : 'Please log ...'}</p>  
        </footer>
      </div>
    </>
  )
}

export default App

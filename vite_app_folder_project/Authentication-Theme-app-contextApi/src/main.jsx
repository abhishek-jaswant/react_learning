import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import './App.css'

import ThemeContextProvider from './context/ThemeContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
//AuthProvider
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeContextProvider> 
      <AuthProvider>
        <App />
      </AuthProvider>
      </ThemeContextProvider>
   
    
  </StrictMode>,
)



import { createContext, useState } from 'react'
export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const handleLogin = () => {
        setIsAuthenticated(prevState => !prevState)
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, handleLogin }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext
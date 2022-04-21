import { createContext, useState } from "react";

const Auth = createContext()

const AuthContext = ({children}) => {
    const [isAuth, setIsAuth] = useState(false)
    const[token, setToken] = useState('')
    
    const login = (token) => {
        setToken(token)
        setIsAuth(true)
        
        console.log(isAuth)
    }
    const logout = () => {
        setIsAuth(false)
        setToken('')
    }
    return(
        <Auth.Provider value={{
            isAuth,
            token,
            
            login,
            logout
        }}>
            {children}
        </Auth.Provider>
    )
}
export {Auth, AuthContext}
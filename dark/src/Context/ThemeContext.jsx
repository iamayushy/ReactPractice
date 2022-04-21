import { createContext, useState } from "react";

const theme = createContext()
    
const ThemeContext = ({children}) => {
    const [dark, setDark] = useState(true)
    
    return(
        <theme.Provider value={{
            dark,
            setDark
        }}>
            {children}
        </theme.Provider>
    )
}
export {theme, ThemeContext}
import { useContext, useState } from "react"
import { authContext } from "../Context/Auth"
import { Home } from "./Home"
import { Login } from "./Login"

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(authContext)
    const [name, setName] = useState('SignIn')
    
    
    return(
        <div>
            <h1>Welcome To Dev Tech</h1>
            {isAuth === false ? <Login/>:<Home/>}
            <button onClick={()=>setIsAuth(false)}>{isAuth=== false?'SignIn':'SignOut'}</button>

        </div>
    )
}
export {Navbar}
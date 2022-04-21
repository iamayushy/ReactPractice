import { createContext, useEffect, useState } from "react";

const authContext = createContext()

const Auth = ({children}) =>{
    const [isAuth, setIsAuth] = useState(false)
    function trigger(email, password){
        setIsAuth(false)
        fetch('https://reqres.in/api/login',{
            method:'POST',
            body:JSON.stringify({
                email,
                password
            }),
            headers: { "Content-type": "application/json; charset=UTF-8" },
            
        },
        )
        .then(res => res.json())
        .then((json) => {
            setIsAuth(true)
        })
        .catch(err =>{
            setIsAuth(false)
            console.log(err)
            
        })
        console.log(isAuth);
    }
    
    return(
    <authContext.Provider value={{
         trigger,
         isAuth,
         setIsAuth
    }}>
        {children}
    </authContext.Provider>

    )
}

export {Auth, authContext}
import { createContext, useEffect } from "react";

const authContext = createContext()

const auth = ({children}) =>{
    function trigger(email, password){
        fetch('https://reqres.in/api/login',{
            method:'POST',
            body:JSON.stringify({
                "email": email,
                "password": password
            }),
            headers: { "Content-type": "application/json; charset=UTF-8" },
            
        },
        )
        .then(res => res.json())
        .then((json) => console.log(json))
        .catch(err => console.log(err))
    }
        
    return(
    <authContext.Provider value={{
         trigger
    }}>
        {children}
    </authContext.Provider>

    )
}

export {auth, authContext}
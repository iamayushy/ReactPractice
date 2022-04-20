import { useContext } from "react"
import {authContext } from "../Context/Auth"

const Login = () => {
    const {trigger} = useContext(authContext)
    function handleSubmit(e){
        e.preventDefault();
        let email = e.target.email.value;
        let pass = e.target.pass.value;
        trigger(email, pass)
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
        <input type="text" name="email"/>
        <input type="password" name="pass"/>
        <input type="submit" />
        </form>
        </>

        
    )
}
export {Login}
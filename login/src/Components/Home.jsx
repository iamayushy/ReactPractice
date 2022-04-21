import { useContext, useState } from "react"
import {Auth } from "../Context/AuthContext";

const Home = () => {
    const {login, isAuth,logout, token} = useContext(Auth)
    const [userDetail, setUserDetail] = useState({
        email:"",
        password:"",
    })

    function handleChange(event){
        const {name, value} = event.target;
        setUserDetail({
            ...userDetail,
            [name] : value
        })

    }
    function handleSubmit(e){
        e.preventDefault()
        // logout()
        fetch('https://reqres.in/api/login',{
            method:'POST',
            body:JSON.stringify(userDetail),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(ans => {
            login(ans.token)
            
        })
        .catch(error => console.log(error))

    }
    console.log(token);
    
    return token !== undefined && token.length > 5? <h1>Welcome Developer</h1>:(
     
        <div>
            <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                <input name="email" placeholder="Email" style={{padding:'0.3rem', margin:'0.5rem'}} type="text" value={userDetail.email} onChange={handleChange}/>
                <input name="password" placeholder="Password" style={{padding:'0.3rem', margin:'0.5rem'}} type="password" onChange={handleChange} value={userDetail.password}/>
                <input style={{padding:'0.3rem', margin:'0.5rem'}} type="submit"/>
            </form>
        </div>
    )
}
export {Home}